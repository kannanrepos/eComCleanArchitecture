using System;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.DomainEvents.Category;
using Product.Domain.Exceptions;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Category.Commands.Delete;

internal sealed class DeleteCategoryCommandHandler(ICategoryRepository repository)
: ICommandHandler<DeleteCategoryCommand>
{
  public async Task<Result> Handle(DeleteCategoryCommand command, CancellationToken cancellationToken)
  {
    var entity = await repository.GetByIdAsync(command.CategoryId, cancellationToken);
    if (entity == null)
    {
      return Result.Failure(CategoryErrors.NotFound(command.CategoryId));
    }
    await repository.DeleteAsync(entity.Id, cancellationToken);
    entity.Raise(new CategoryDeletedDomainEvent(entity.Id));
    return Result.Success();
  }
}
