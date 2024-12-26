using AutoMapper;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.DomainEvents.Brand;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Brand.Commands.Create;

internal sealed class CreateBrandCommandHandler(IBrandRepository repository, IMapper mapper) : ICommandHandler<CreateBrandCommand, Guid>
{
  public async Task<Result<Guid>> Handle(CreateBrandCommand command, CancellationToken cancellationToken)
  {
    var entity = mapper.Map<Domain.Entities.Brand>(command);
    await repository.AddAsync(entity, cancellationToken);
    entity.Raise(new BrandCreatedDomainEvent(entity.Id));
    return entity.Id;

  }
}
