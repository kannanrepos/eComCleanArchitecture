using Ecom.Shared.Models;
using MediatR;
using Product.Application.Entities.Brand.Queries;
using Product.Application.Entities.Brand.Queries.Get;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Brand;

public class Get : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapGet("brands/{id:guid}", async (Guid brandId, ISender sender, CancellationToken cancellationToken) =>
   {
     var command = new GetBrandQuery(brandId);

     Result<List<BrandResponse>> result = await sender.Send(command, cancellationToken);

     return result.Match(Results.Ok, CustomResults.Problem);
   })
   .WithTags(Tags.Brands);
  }
}
