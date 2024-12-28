
namespace Product.Application.Entities.Category.Queries;

public class CategoryResponse
{
  public Guid Id { get; set; }
  public string Name { get; set; } = string.Empty;
  public string Description { get; set; } = string.Empty;
}
