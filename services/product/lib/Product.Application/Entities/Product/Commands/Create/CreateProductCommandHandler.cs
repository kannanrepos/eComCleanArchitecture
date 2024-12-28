using AutoMapper;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.DomainEvents.Product;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Product.Commands.Create;

internal sealed class CreateProductCommandHandler(IProductRepository repository, IMapper mapper) : ICommandHandler<CreateProductCommand, Guid>
{
  public async Task<Result<Guid>> Handle(CreateProductCommand command, CancellationToken cancellationToken)
  {
    var entity = mapper.Map<Domain.Entities.Products>(command);
    await repository.AddAsync(entity, cancellationToken);
    entity.Raise(new ProductCreatedDomainEvent(entity.Id));
    return entity.Id;

  }
}
