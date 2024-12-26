using Ecom.Shared;
namespace Product.Domain.DomainEvents.ProductImage;

public sealed record class ProductImageDeletedDomainEvent(Guid ProductImageId) : IDomainEvent;