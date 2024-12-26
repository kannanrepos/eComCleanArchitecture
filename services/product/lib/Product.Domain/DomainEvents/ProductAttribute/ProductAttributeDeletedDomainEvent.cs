using Ecom.Shared;
namespace Product.Domain.DomainEvents.ProductAttribute;

public sealed record class ProductAttributeDeletedDomainEvent(Guid ProductAttributeId) : IDomainEvent;
