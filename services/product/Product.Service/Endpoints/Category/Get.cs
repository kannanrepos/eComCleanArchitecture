using Ecom.Shared.Models;
using MediatR;
using Product.Application.Entities.Category.Queries;
using Product.Application.Entities.Category.Queries.Get;
using Product.Application.Entities.Category.Queries.GetById;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Category;

public class Get : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapGet("Categories", async (ISender sender, CancellationToken cancellationToken) =>
   {
     var command = new GetCategoryQuery();

     Result<List<CategoryResponse>> result = await sender.Send(command, cancellationToken);

     return result.Match(Results.Ok, CustomResults.Problem);
   })
   .WithTags(Tags.Categories);
  }
}
