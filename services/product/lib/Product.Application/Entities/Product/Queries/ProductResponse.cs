
namespace Product.Application.Entities.Product.Queries;

public record ProductResponse
{
  public Guid Id { get; set; }
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
  public ProductImage? ProductImages { get; set; }
  public ProductImage? ProductIconImage { get; set; }
}

public record ProductAttribute
{
  public string Name { get; set; } = string.Empty;
  public string Value { get; set; } = string.Empty;

  public required ProductImage ProductImages { get; set; }
  public Guid? ParentProductAttributeId { get; set; }  // Use Guid for ParentProductAttributeId (same type as Id)
  public List<ProductAttribute> ChildProductAttributes { get; set; } = new();

}
public record ProductImage
{
  public List<string> ThumpImages { get; set; } = [];
  public List<string> ProductImages { get; set; } = [];

}