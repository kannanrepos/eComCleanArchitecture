using Ecom.Shared.Models;
using MediatR;
using Product.Application.Entities.Brand.Commands.Create;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Brand;

public class Create : IEndpoint
{
  public sealed class Request
  {
    public required string Name { get; set; }
    public string Description { get; set; } = string.Empty;
  }
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapPost(Tags.Brands, async (Request request, ISender sender, CancellationToken cancellationToken) =>
    {
      var command = new CreateBrandCommand
      {
        Name = request.Name,
        Description = request.Description,
      };
      Result<Guid> result = await sender.Send(command, cancellationToken);
      return result.Match(Results.Ok, CustomResults.Problem);
    })
    .WithTags(Tags.Brands);
  }
}
