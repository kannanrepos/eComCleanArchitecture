
using Ecom.Shared.Models;

namespace Product.Domain.Exceptions;

public static class CategoryErrors
{
  public static Error NotFound(Guid CategoryId) => Error.NotFound(
         "Category.NotFound",
         $"The Category item with the Id = '{CategoryId}' was not found");
}
