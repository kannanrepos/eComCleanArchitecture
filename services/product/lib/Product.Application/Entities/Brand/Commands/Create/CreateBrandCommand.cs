using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Brand.Commands.Create;

public sealed class CreateBrandCommand : ICommand<Guid>
{
  public required string Name { get; set; }
  public string Description { get; set; } = string.Empty;
}
