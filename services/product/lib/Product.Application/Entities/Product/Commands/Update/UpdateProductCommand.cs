using Microsoft.AspNetCore.Http;
using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Product.Commands.Update;

public sealed record UpdateProductCommand(
  Guid Id,
  string SKU,
  string Name,
  string Description,
  decimal Price,
  int Stock,
  int Rating,
  int LowStockThreshold,
  Guid BrandId,
  Guid CategoryId,
 ProductFiles ProductImages
) : ICommand;

public record ProductFiles(IFormFile? Image, IReadOnlyList<IFormFile> Specifications);

