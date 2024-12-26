using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Brand.Commands.Delete;

public sealed record DeleteBrandCommand(Guid BrandId) : ICommand;

