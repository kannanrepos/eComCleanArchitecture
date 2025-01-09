using System.ComponentModel.DataAnnotations.Schema;
using Ecom.Shared.Models;
namespace Product.Domain.Entities;

public class Category : BaseEntity
{
  public string Name { get; set; } = string.Empty;
  public string Description { get; set; } = string.Empty;
  [ForeignKey("ParentId")]
  public Guid? ParentId { get; set; }
  public Category? ParentCategory { get; set; }
  public ICollection<Category> ChildCategories { get; set; } = [];
  public ICollection<Products> Products { get; set; } = [];

}
