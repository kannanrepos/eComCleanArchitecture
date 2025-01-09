using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.DomainEvents.Product;
using Product.Domain.Entities;
using Product.Domain.Repositories;
using Product.Domain.Services;
using Product.Domain.ValueObjects;

namespace Product.Application.Entities.Product.Commands.Create;

internal sealed class CreateProductCommandHandler(IProductRepository repository, IFileService fileService) : ICommandHandler<CreateProductCommand, Guid>
{
  public async Task<Result<Guid>> Handle(CreateProductCommand command, CancellationToken cancellationToken)
  {
    var productIconImage = string.Empty;
    IEnumerable<string> thumpImages = [];
    IEnumerable<string> productImages = [];
    if (command.ProductImages?.Image is not null)
    {
      productIconImage = await fileService.SaveFileAsync(command.ProductImages.Image);
    }
    if (command.ProductImages?.ThumpImages is not null)
    {
      thumpImages = await fileService.SaveFilesAsync(command.ProductImages.ThumpImages);
    }
    if (command.ProductImages?.ProductImages is not null)
    {
      productImages = await fileService.SaveFilesAsync(command.ProductImages.ProductImages);
    }
    var entity = new Products
    {
      SKU = command.SKU,
      Name = command.Name,
      ShortDescription = command.ShortDescription,
      Description = command.Description,
      MRP = command.MRP,
      DiscountPercentage = command.DiscountPercentage,
      Price = command.Price,
      Stock = command.Stock,
      Rating = command.Rating,
      LowStockThreshold = command.LowStockThreshold,

      CategoryId = command.CategoryId,
      BrandId = command.BrandId,
      ProductIconImage = new ProductImage
      {
        ThumpImages = [productIconImage]
      },
      ProductImages = new ProductImage
      {
        ThumpImages = thumpImages.ToList(),
        ProductImages = productImages.ToList()
      },
      ProductAttributes = command.ProductAttributes
    };
    await repository.AddAsync(entity, cancellationToken);
    entity.Raise(new ProductCreatedDomainEvent(entity.Id));
    return entity.Id;

  }
}
