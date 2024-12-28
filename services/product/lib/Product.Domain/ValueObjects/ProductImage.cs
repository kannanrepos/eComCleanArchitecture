using Microsoft.EntityFrameworkCore;

namespace Product.Domain.ValueObjects;
// ProductImage remains the same
[Owned]
public class ProductImage
{
  public List<string> Url { get; set; } = new();
}