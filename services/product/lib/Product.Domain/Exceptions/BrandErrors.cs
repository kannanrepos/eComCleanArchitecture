
using Ecom.Shared.Models;

namespace Product.Domain.Exceptions;

public static class BrandErrors
{
  public static Error NotFound(Guid brandId) => Error.NotFound(
         "Brand.NotFound",
         $"The brand item with the Id = '{brandId}' was not found");
}
