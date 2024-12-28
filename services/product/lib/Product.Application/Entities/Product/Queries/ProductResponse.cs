
namespace Product.Application.Entities.Product.Queries;

public record ProductResponse
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
  public ProductFiles ProductImages { get; set; } = new();
}
public record ProductFiles
{
  public string Image { get; set; } = string.Empty;
  public List<string> Specifications { get; set; } = [];
}
