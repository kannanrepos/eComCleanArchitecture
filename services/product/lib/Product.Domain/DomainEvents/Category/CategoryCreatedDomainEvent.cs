using Ecom.Shared;
namespace Product.Domain.DomainEvents.Category;

public sealed record class CategoryCreatedDomainEvent(Guid CategoryId) : IDomainEvent;
