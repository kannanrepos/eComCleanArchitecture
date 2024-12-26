using System;
using AutoMapper;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Application.Entities.Brand.Queries;
using Product.Domain.DomainEvents.Brand;
using Product.Domain.Exceptions;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Brand.Commands.Update;

internal sealed class UpdateBrandCommandHandler(IBrandRepository repository)
: ICommandHandler<UpdateBrandCommand>
{
    public async Task<Result> Handle(UpdateBrandCommand command, CancellationToken cancellationToken)
    {
        var entity = await repository.GetByIdAsync(command.Id, cancellationToken);
        if (entity == null)
        {
            return Result.Failure(BrandErrors.NotFound(command.Id));
        }
        entity.Name = command.Name;
        entity.Description = command.Description;
        await repository.UpdateAsync(entity, cancellationToken);
        entity.Raise(new BrandUpdatedDomainEvent(entity.Id));
        return Result.Success();
    }
}
