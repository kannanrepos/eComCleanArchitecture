using Ecom.Shared.Models;
using MediatR;
using Product.Application.Entities.Product.Queries;
using Product.Application.Entities.Product.Queries.Get;
using Product.Application.Entities.Product.Queries.GetById;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Product;

public class GetByProductId : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapGet("Products/{ProductId:guid}", async (Guid ProductId, ISender sender, CancellationToken cancellationToken) =>
   {
     var command = new GetProductByIdQuery(ProductId);

     Result<ProductResponse> result = await sender.Send(command, cancellationToken);

     return result.Match(Results.Ok, CustomResults.Problem);
   })
   .WithTags(Tags.Products);
  }
}
