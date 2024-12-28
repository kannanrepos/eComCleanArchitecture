using Ecom.Shared.Models;
using MediatR;
using Product.Application.Entities.Product.Commands.Create;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Product;

public class Create : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapPost("Products", async (HttpRequest request, ISender sender, CancellationToken cancellationToken) =>
    {
      var formCollection = await request.ReadFormAsync();
      var productImages = formCollection.Files.GetFiles("specifications");
      var command = new CreateProductCommand
      {
        SKU = formCollection["SKU"]!,
        Name = formCollection["Name"]!,
        Description = formCollection["Description"]!,
        Price = decimal.Parse(formCollection["Price"]!),
        Stock = int.Parse(formCollection["Stock"]!),
        Rating = int.Parse(formCollection["Rating"]!),
        LowStockThreshold = int.Parse(formCollection["LowStockThreshold"]!),
        CategoryId = Guid.Parse(formCollection["CategoryId"]!),
        BrandId = Guid.Parse(formCollection["BrandId"]!),
        ProductImages = new ProductFiles(formCollection.Files.GetFile("image"), productImages)
      };
      Result<Guid> result = await sender.Send(command, cancellationToken);
      return result.Match(Results.Ok, CustomResults.Problem);
    })
    .WithTags(Tags.Products);
  }
}
