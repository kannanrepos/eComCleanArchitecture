using Ecom.Shared.Models;
namespace Product.Domain.Entities;

public class ProductImage : BaseEntity
{
  public string ImageUrl { get; set; } = string.Empty;
  public Guid ProductId { get; set; }
}
