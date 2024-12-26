using Ecom.Shared;
namespace Product.Domain.DomainEvents.Product;

public sealed record class ProductCreatedDomainEvent(Guid ProductId) : IDomainEvent;
