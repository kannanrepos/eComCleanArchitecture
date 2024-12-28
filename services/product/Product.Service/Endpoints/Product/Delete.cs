using Ecom.Shared.Models;
using MediatR;
using Product.Application.Entities.Product.Commands.Delete;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Product;

internal sealed class Delete : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapDelete("Products/{id:guid}", async (Guid id, ISender sender, CancellationToken cancellationToken) =>
    {
      var command = new DeleteProductCommand(id);

      Result result = await sender.Send(command, cancellationToken);

      return result.Match(Results.NoContent, CustomResults.Problem);
    })
    .WithTags(Tags.Products)
    .RequireAuthorization();
  }
}

