using System;
using Ecom.Shared.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Product.Application.Entities.Brand.Commands.Update;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Brand;

public class Update : IEndpoint
{
  public sealed class Request
  {
    public required string Name { get; set; }
    public string Description { get; set; } = string.Empty;
  }
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapPut("brands/{brandId:guid}", async (Guid brandId, [FromBody] Request request, ISender sender, CancellationToken cancellationToken) =>
   {
     var command = new UpdateBrandCommand(brandId, request.Name, request.Description);

     Result result = await sender.Send(command, cancellationToken);

     return result.Match(Results.NoContent, CustomResults.Problem);
   })
   .WithTags(Tags.Brands);
  }
}
