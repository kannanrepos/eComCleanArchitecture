using System;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.DomainEvents.Brand;
using Product.Domain.Exceptions;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Brand.Commands.Delete;

internal sealed class DeleteBrandCommandHandler(IBrandRepository repository)
: ICommandHandler<DeleteBrandCommand>
{
  public async Task<Result> Handle(DeleteBrandCommand command, CancellationToken cancellationToken)
  {
    var entity = await repository.GetByIdAsync(command.BrandId, cancellationToken);
    if (entity == null)
    {
      return Result.Failure(BrandErrors.NotFound(command.BrandId));
    }
    await repository.DeleteAsync(entity.Id, cancellationToken);
    entity.Raise(new BrandDeletedDomainEvent(entity.Id));
    return Result.Success();
  }
}
