using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Product.Commands.Delete;

public sealed record DeleteProductCommand(Guid ProductId) : ICommand;

