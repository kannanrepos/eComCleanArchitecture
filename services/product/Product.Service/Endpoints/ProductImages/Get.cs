using System;
using Product.Domain.Services;

namespace Product.Service.Endpoints.ProductImages;

public class Get : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapGet("product-images/{fileName}", async (string fileName, IFileService fileService, CancellationToken cancellationToken) =>
    {
      var file = await fileService.GetFileAsync(fileName, cancellationToken);
      if (string.IsNullOrEmpty(file)) return Results.NotFound();
      return Results.Ok($"data:image/jpeg;base64,{file}");
    })
    .WithTags(Tags.ProductImages);
  }
}
