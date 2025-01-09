using System;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.DomainEvents.Product;
using Product.Domain.Exceptions;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Product.Commands.Delete;

internal sealed class DeleteProductCommandHandler(IProductRepository repository)
: ICommandHandler<DeleteProductCommand>
{
  public async Task<Result> Handle(DeleteProductCommand command, CancellationToken cancellationToken)
  {
    var entity = await repository.GetByIdAsync(command.ProductId, cancellationToken);
    if (entity == null)
    {
      return Result.Failure(ProductErrors.NotFound(command.ProductId));
    }
    await repository.DeleteAsync(entity.Id, cancellationToken);
    entity.Raise(new ProductDeletedDomainEvent(entity.Id));
    return Result.Success();
  }
}
