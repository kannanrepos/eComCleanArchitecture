using Product.Application.Abstractions.Messaging;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace Product.Application.Entities.Product.Commands.Create;

public sealed class CreateProductCommand : ICommand<Guid>
{
  public required string SKU { get; set; }
  public required string Name { get; set; }
  public required string Description { get; set; }
  public required decimal Price { get; set; }
  public required int Stock { get; set; }
  public int Rating { get; set; }
  public int LowStockThreshold { get; set; } = 10;
  public required Guid CategoryId { get; set; }
  public required Guid BrandId { get; set; }
  public ProductFiles? ProductImages { get; set; }
}
public record ProductFiles(IFormFile? Image, IReadOnlyList<IFormFile> Specifications);
