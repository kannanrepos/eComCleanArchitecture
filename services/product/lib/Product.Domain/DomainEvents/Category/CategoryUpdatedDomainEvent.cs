using Ecom.Shared;
namespace Product.Domain.DomainEvents.Category;

public sealed record class CategoryUpdatedDomainEvent(Guid CategoryId) : IDomainEvent;