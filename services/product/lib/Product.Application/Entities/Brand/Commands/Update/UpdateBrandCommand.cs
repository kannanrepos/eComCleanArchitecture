using System;
using Product.Application.Abstractions.Messaging;
using Product.Application.Entities.Brand.Queries;

namespace Product.Application.Entities.Brand.Commands.Update;

public sealed record UpdateBrandCommand(Guid Id, string Name, string Description) : ICommand;

