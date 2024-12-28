using AutoMapper;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.DomainEvents.Category;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Category.Commands.Create;

internal sealed class CreateCategoryCommandHandler(ICategoryRepository repository, IMapper mapper) : ICommandHandler<CreateCategoryCommand, Guid>
{
  public async Task<Result<Guid>> Handle(CreateCategoryCommand command, CancellationToken cancellationToken)
  {
    var entity = mapper.Map<Domain.Entities.Category>(command);
    await repository.AddAsync(entity, cancellationToken);
    entity.Raise(new CategoryCreatedDomainEvent(entity.Id));
    return entity.Id;

  }
}
