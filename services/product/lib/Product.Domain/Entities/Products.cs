using Ecom.Shared.Models;
namespace Product.Domain.Entities;

public class Products : BaseEntity
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
  public virtual List<ProductImage> ProductImages { get; set; } = [];
  public virtual List<ProductAttribute> ProductAttributes { get; set; } = [];

}
