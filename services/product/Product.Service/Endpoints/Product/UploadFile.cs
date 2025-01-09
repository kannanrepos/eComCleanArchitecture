using System;
using Ecom.Shared.Models;
using Product.Domain.Services;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Product;

public class UploadFile : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapPost("/upload", async (HttpRequest request) =>
 {
   var file = request.Form.Files.GetFile("file");

   if (file == null)
   {
     return Results.BadRequest("No file uploaded.");
   }

   // Define the file save path (you can modify this to save it to any location you prefer)
   var savePath = Path.Combine(Directory.GetCurrentDirectory(), "UploadedFiles", file.FileName);

   // Ensure the directory exists
   Directory.CreateDirectory(Path.GetDirectoryName(savePath)!);

   // Save the file to the specified path
   using (var stream = new FileStream(savePath, FileMode.Create))
   {
     await file.CopyToAsync(stream);
   }

   return Results.Ok(new { FilePath = savePath });
 });
  }
}
