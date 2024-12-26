using Ecom.Shared.Models;

namespace Product.Domain.Entities;

public class Brand : BaseEntity
{
  public string Name { get; set; } = string.Empty;
  public string Description { get; set; } = string.Empty;
  public virtual List<Products> Products { get; set; } = [];
}
