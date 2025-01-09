using Ecom.Shared;
namespace Product.Domain.DomainEvents.Category;

public sealed record class CategoryDeletedDomainEvent(Guid CategoryId) : IDomainEvent;
