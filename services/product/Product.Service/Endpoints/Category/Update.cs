using System;
using Ecom.Shared.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Product.Application.Entities.Category.Commands.Update;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Category;

public class Update : IEndpoint
{
  public sealed class Request
  {
    public required string Name { get; set; }
    public string Description { get; set; } = string.Empty;
  }
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapPut("Categories/{CategoryId:guid}", async (Guid CategoryId, [FromBody] Request request, ISender sender, CancellationToken cancellationToken) =>
   {
     var command = new UpdateCategoryCommand(CategoryId, request.Name, request.Description);

     Result result = await sender.Send(command, cancellationToken);

     return result.Match(Results.NoContent, CustomResults.Problem);
   })
   .WithTags(Tags.Categories);
  }
}
