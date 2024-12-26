using Ecom.Shared.Models;
using MediatR;
using Product.Application.Entities.Brand.Queries;
using Product.Application.Entities.Brand.Queries.Get;
using Product.Application.Entities.Brand.Queries.GetById;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Brand;

public class Get : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapGet("brands", async (ISender sender, CancellationToken cancellationToken) =>
   {
     var command = new GetBrandQuery();

     Result<List<BrandResponse>> result = await sender.Send(command, cancellationToken);

     return result.Match(Results.Ok, CustomResults.Problem);
   })
   .WithTags(Tags.Brands);
  }
}
