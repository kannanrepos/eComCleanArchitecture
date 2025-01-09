using Microsoft.EntityFrameworkCore;

namespace Product.Domain.ValueObjects;
// ProductImage remains the same
[Owned]
public record ProductImage()
{

  public List<string> ThumpImages { get; set; } = [];
  public List<string> ProductImages { get; set; } = [];
}