using Ecom.Shared.Models;
using MediatR;
using Product.Application.Entities.Category.Queries;
using Product.Application.Entities.Category.Queries.Get;
using Product.Application.Entities.Category.Queries.GetById;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Category;

public class GetByCategoryId : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapGet("Categories/{CategoryId:guid}", async (Guid CategoryId, ISender sender, CancellationToken cancellationToken) =>
   {
     var command = new GetCategoryByIdQuery(CategoryId);

     Result<CategoryResponse> result = await sender.Send(command, cancellationToken);

     return result.Match(Results.Ok, CustomResults.Problem);
   })
   .WithTags(Tags.Categories);
  }
}
