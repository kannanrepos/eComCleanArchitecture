using System;
using Product.Application.Abstractions.Messaging;
using Product.Application.Entities.Category.Queries;

namespace Product.Application.Entities.Category.Commands.Update;

public sealed record UpdateCategoryCommand(Guid Id, string Name, string Description) : ICommand;

