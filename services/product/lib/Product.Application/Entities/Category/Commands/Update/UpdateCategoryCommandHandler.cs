using System;
using AutoMapper;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Application.Entities.Category.Queries;
using Product.Domain.DomainEvents.Category;
using Product.Domain.Exceptions;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Category.Commands.Update;

internal sealed class UpdateCategoryCommandHandler(ICategoryRepository repository)
: ICommandHandler<UpdateCategoryCommand>
{
    public async Task<Result> Handle(UpdateCategoryCommand command, CancellationToken cancellationToken)
    {
        var entity = await repository.GetByIdAsync(command.Id, cancellationToken);
        if (entity == null)
        {
            return Result.Failure(CategoryErrors.NotFound(command.Id));
        }
        entity.Name = command.Name;
        entity.Description = command.Description;
        await repository.UpdateAsync(entity, cancellationToken);
        entity.Raise(new CategoryUpdatedDomainEvent(entity.Id));
        return Result.Success();
    }
}
