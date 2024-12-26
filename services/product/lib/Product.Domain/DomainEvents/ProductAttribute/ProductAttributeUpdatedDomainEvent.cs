using Ecom.Shared;
namespace Product.Domain.DomainEvents.ProductAttribute;

public sealed record class ProductAttributeUpdatedDomainEvent(Guid ProductAttributeId) : IDomainEvent;
