using Ecom.Shared.Models;
using Microsoft.EntityFrameworkCore;

namespace Product.Domain.ValueObjects;

[Owned]
public class ProductAttribute : BaseEntity
{
  public string Name { get; set; } = string.Empty;
  public string Value { get; set; } = string.Empty;

  public required ProductImage ProductImages { get; set; }

  // Parent ProductAttribute (recursive relationship)
  public Guid? ParentProductAttributeId { get; set; }  // Use Guid for ParentProductAttributeId (same type as Id)
  public ProductAttribute? ParentProductAttribute { get; set; }  // Navigation property

  // Child ProductAttributes
  public List<ProductAttribute> ChildProductAttributes { get; set; } = [];
}
