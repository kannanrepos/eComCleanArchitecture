using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Category.Commands.Create;

public sealed class CreateCategoryCommand : ICommand<Guid>
{
  public required string Name { get; set; }
  public string Description { get; set; } = string.Empty;
}
