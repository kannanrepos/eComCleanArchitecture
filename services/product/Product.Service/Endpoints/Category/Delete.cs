using System;
using Ecom.Shared.Models;
using MediatR;
using Product.Application.Entities.Category.Commands.Delete;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Category;

internal sealed class Delete : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapDelete("Categories/{id:guid}", async (Guid id, ISender sender, CancellationToken cancellationToken) =>
    {
      var command = new DeleteCategoryCommand(id);

      Result result = await sender.Send(command, cancellationToken);

      return result.Match(Results.NoContent, CustomResults.Problem);
    })
    .WithTags(Tags.Categories);
  }
}

