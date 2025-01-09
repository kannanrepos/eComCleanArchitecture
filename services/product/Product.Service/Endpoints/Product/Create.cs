using Ecom.Shared.Models;
using MediatR;
using Product.Application.Entities.Product.Commands.Create;
using Product.Domain.Services;
using Product.Domain.ValueObjects;
using Product.Service.Extensions;
using Product.Service.Infrastructure;

namespace Product.Service.Endpoints.Product;

public class Create : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapPost("Products", async (HttpRequest request, IFileService fileService, ISender sender, CancellationToken cancellationToken) =>
    {
      // Read the form data
      var formCollection = await request.ReadFormAsync(cancellationToken);

      // Get the single image file (for the 'image' field)
      var productImage = formCollection.Files.GetFile("productImage");
      // Get multiple image files (for the 'specifications' field)
      var productThumpImages = formCollection.Files.GetFiles("productThumpImages");
      var productImages = formCollection.Files.GetFiles("productImages");

      var command = new CreateProductCommand
      {
        SKU = formCollection["SKU"]!,
        Name = formCollection["Name"]!,
        ShortDescription = formCollection["ShortDescription"]!,
        Description = formCollection["Description"]!,
        Price = GetPrice(formCollection),
        MRP = decimal.Parse(formCollection["MRP"]!),
        DiscountPercentage = decimal.Parse(formCollection["DiscountPercentage"]!),
        Stock = int.Parse(formCollection["Stock"]!),
        Rating = int.Parse(formCollection["Rating"]!),
        LowStockThreshold = int.Parse(formCollection["LowStockThreshold"]!),
        CategoryId = Guid.Parse(formCollection["CategoryId"]!),
        BrandId = Guid.Parse(formCollection["BrandId"]!),
        ProductAttributes = await formCollection.GetProductAttributes(fileService),
        ProductImages = new ProductFiles(Image: productImage, ThumpImages: productThumpImages ?? [], ProductImages: productImages ?? []),
      };
      Result<Guid> result = await sender.Send(command, cancellationToken);
      return result.Match(Results.Ok, CustomResults.Problem);
    })
    .WithTags(Tags.Products);
  }

  private decimal GetPrice(IFormCollection formCollection)
  {
    var MRP = decimal.Parse(formCollection["MRP"]!);
    var DiscountPercentage = decimal.Parse(formCollection["DiscountPercentage"]!);
    var Price = MRP - (MRP * DiscountPercentage / 100);
    return Price;
  }
}