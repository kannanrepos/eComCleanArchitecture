using Ecom.Shared.Models;
using Product.Domain.ValueObjects;
namespace Product.Domain.Entities;

public class Products : BaseEntity
{
  public required string SKU { get; set; }
  public required string Name { get; set; }
  public required string ShortDescription { get; set; }
  public required string Description { get; set; }
  public decimal DiscountPercentage { get; set; }
  public decimal MRP { get; set; }
  public required decimal Price { get; set; }
  public required int Stock { get; set; }
  public int Rating { get; set; }
  public int LowStockThreshold { get; set; } = 10;

  public required ProductImage ProductIconImage { get; set; } = new();
  public required ProductImage ProductImages { get; set; } = new();
  public List<ProductAttribute> ProductAttributes { get; set; } = [];
  public required Guid? CategoryId { get; set; }
  public required Guid? BrandId { get; set; }
  public Brand? Brand { get; set; }
  public Category? Category { get; set; }



}
