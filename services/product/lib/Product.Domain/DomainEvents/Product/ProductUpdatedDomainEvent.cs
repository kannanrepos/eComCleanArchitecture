using Ecom.Shared;
namespace Product.Domain.DomainEvents.Product;

public sealed record class ProductUpdatedDomainEvent(Guid ProductId) : IDomainEvent;