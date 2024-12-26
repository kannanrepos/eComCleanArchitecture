using Ecom.Shared;
namespace Product.Domain.DomainEvents.ProductImage;

public sealed record class ProductImageUpdatedDomainEvent(Guid ProductImageId) : IDomainEvent;