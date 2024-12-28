using Ecom.Shared.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Product.Application.Entities.Product.Commands.Update;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Product;

public class Update : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapPut("Products/{productId:guid}", async (Guid productId, [FromBody] HttpRequest request, ISender sender, CancellationToken cancellationToken) =>
   {
     var formCollection = await request.ReadFormAsync();
     var productImages = formCollection.Files.GetFiles("specifications");
     var command = new UpdateProductCommand
     (
       productId,
       formCollection["SKU"]!,
       formCollection["Name"]!,
       formCollection["Description"]!,
       decimal.Parse(formCollection["Price"]!),
       int.Parse(formCollection["Stock"]!),
       int.Parse(formCollection["Rating"]!),
       int.Parse(formCollection["LowStockThreshold"]!),
       Guid.Parse(formCollection["CategoryId"]!),
       Guid.Parse(formCollection["BrandId"]!),
       new ProductFiles(formCollection.Files.GetFile("image"), productImages)
     );

     Result result = await sender.Send(command, cancellationToken);

     return result.Match(Results.NoContent, CustomResults.Problem);
   })
   .WithTags(Tags.Products);
  }
}
