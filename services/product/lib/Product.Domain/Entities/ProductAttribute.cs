using Ecom.Shared.Models;
namespace Product.Domain.Entities;

public class ProductAttribute : BaseEntity
{
  public string Name { get; set; } = string.Empty;
  public string Value { get; set; } = string.Empty;
  public Guid ProductId { get; set; }
}
