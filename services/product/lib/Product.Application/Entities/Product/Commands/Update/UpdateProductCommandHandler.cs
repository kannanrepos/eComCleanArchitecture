using System;
using AutoMapper;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Application.Entities.Product.Queries;
using Product.Domain.DomainEvents.Product;
using Product.Domain.Exceptions;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Product.Commands.Update;

internal sealed class UpdateProductCommandHandler(IProductRepository repository)
: ICommandHandler<UpdateProductCommand>
{
    public async Task<Result> Handle(UpdateProductCommand command, CancellationToken cancellationToken)
    {
        var entity = await repository.GetByIdAsync(command.Id, cancellationToken);
        if (entity == null)
        {
            return Result.Failure(ProductErrors.NotFound(command.Id));
        }
        entity.Name = command.Name;
        entity.Description = command.Description;
        await repository.UpdateAsync(entity, cancellationToken);
        entity.Raise(new ProductUpdatedDomainEvent(entity.Id));
        return Result.Success();
    }
}
