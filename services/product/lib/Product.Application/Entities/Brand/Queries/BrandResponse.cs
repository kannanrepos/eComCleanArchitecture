
namespace Product.Application.Entities.Brand.Queries;

public class BrandResponse
{
  public Guid Id { get; set; }
  public string Name { get; set; } = string.Empty;
  public string Description { get; set; } = string.Empty;
}
