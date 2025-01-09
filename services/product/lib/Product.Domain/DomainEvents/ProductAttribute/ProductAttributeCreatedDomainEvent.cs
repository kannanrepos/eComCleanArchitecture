using Ecom.Shared;
namespace Product.Domain.DomainEvents.ProductAttribute;

public sealed record class ProductAttributeCreatedDomainEvent(Guid ProductAttributeId) : IDomainEvent;