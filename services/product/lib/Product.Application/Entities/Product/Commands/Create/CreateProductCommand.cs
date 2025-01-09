using Product.Application.Abstractions.Messaging;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Product.Domain.ValueObjects;

namespace Product.Application.Entities.Product.Commands.Create;

public sealed class CreateProductCommand : ICommand<Guid>
{
  public required string SKU { get; set; }
  public required string Name { get; set; }
  public required string ShortDescription { get; set; }
  public required string Description { get; set; }
  public required decimal Price { get; set; }
  public required decimal MRP { get; set; }
  public required decimal DiscountPercentage { get; set; }
  public required int Stock { get; set; }
  public int Rating { get; set; }
  public int LowStockThreshold { get; set; } = 10;

  public List<ProductAttribute> ProductAttributes { get; set; } = [];
  public required Guid? CategoryId { get; set; }
  public required Guid? BrandId { get; set; }
  public ProductFiles? ProductImages { get; set; }
}
public record ProductFiles(IFormFile? Image, IReadOnlyList<IFormFile> ThumpImages, IReadOnlyList<IFormFile> ProductImages);
