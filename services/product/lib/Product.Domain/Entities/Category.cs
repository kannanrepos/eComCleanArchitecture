using Ecom.Shared.Models;
namespace Product.Domain.Entities;

public class Category : BaseEntity
{
  public string Name { get; set; } = string.Empty;
  public string Description { get; set; } = string.Empty;
  public Guid ParentId { get; set; }
  public virtual List<Category> Children { get; set; } = [];
  public virtual List<Products> Products { get; set; } = [];

}
