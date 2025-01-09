using Ecom.Shared.Models;
using MediatR;
using Product.Application.Entities.Product.Queries;
using Product.Application.Entities.Product.Queries.Get;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Product;

public class Get : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapGet("Products", async (ISender sender, CancellationToken cancellationToken) =>
   {
     var command = new GetProductQuery();

     Result<List<ProductResponse>> result = await sender.Send(command, cancellationToken);

     return result.Match(Results.Ok, CustomResults.Problem);
   })
   .WithTags(Tags.Products);
  }
}
