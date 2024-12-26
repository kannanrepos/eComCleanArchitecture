using Ecom.Shared;
namespace Product.Domain.DomainEvents.ProductImage;

public sealed record class ProductImageCreatedDomainEvent(Guid ProductImageId) : IDomainEvent;
