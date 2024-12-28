using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Category.Commands.Delete;

public sealed record DeleteCategoryCommand(Guid CategoryId) : ICommand;

