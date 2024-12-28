using Product.Domain.Services;
using Product.Domain.ValueObjects;

namespace Product.Service.Extensions;
public static class FormCollectionExtension
{
  public static async Task<List<ProductAttribute>> GetProductAttributes(this IFormCollection formCollection, IFileService fileService, CancellationToken cancellationToken = default)
  {
    var uploadDirectory = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "product-images");
    var productAttributes = new List<ProductAttribute>();
    var productAttributesCollectionKeys = formCollection.Keys.Where(x => x.StartsWith("ProductAttributes")).ToList();
    // Loop through all form fields related to ProductAttributes
    var index = 0;
    for (int i = 0; i < productAttributesCollectionKeys.Count(); i++)
    {
      var name = formCollection[$"ProductAttributes[{index}].Name"].ToString()?.Trim();
      if (string.IsNullOrEmpty(name) || productAttributes.Any(x => x.Name == name)) continue;
      var value = formCollection[$"ProductAttributes[{index}].Value"].ToString();
      var productThumpImages = formCollection.Files.GetFiles($"ProductAttributes[{index}].ProductThumpImages");
      var productImageFiles = formCollection.Files.GetFiles($"ProductAttributes[{index}].ProductImages");
      var childProductAttributes = formCollection[$"ProductAttributes[{index}].ChildProductAttributes"].ToList();
      var productThumpPaths = await fileService.SaveFilesAsync(productThumpImages, cancellationToken);
      var productImagePaths = await fileService.SaveFilesAsync(productImageFiles, cancellationToken);
      var productAttribute = new ProductAttribute
      {
        Name = string.IsNullOrEmpty(name) ? string.Empty : name,
        Value = string.IsNullOrEmpty(value) ? string.Empty : value,
        ProductImages = new ProductImage
        {
          ThumpImages = productThumpPaths.ToList(),
          ProductImages = productImagePaths.ToList()
        }
      };
      if (childProductAttributes.Any() == true)
      {
        //productAttribute.ChildProductAttributes = GetProductAttributes(fileService);
      }
      // Add the ProductAttribute to the list if it's a new one
      if (!productAttributes.Any(x => x.Name == name))
        productAttributes.Add(productAttribute);

      index++;
    }

    return productAttributes;
  }
}