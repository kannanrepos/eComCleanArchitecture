
using Ecom.Shared.Models;

namespace Product.Domain.Exceptions;

public static class ProductErrors
{
  public static Error NotFound(Guid ProductId) => Error.NotFound(
         "Product.NotFound",
         $"The Product item with the Id = '{ProductId}' was not found");
}
