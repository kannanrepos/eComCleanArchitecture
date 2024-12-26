using Ecom.Shared;

namespace Product.Domain.DomainEvents.Brand;

public sealed record class BrandUpdatedDomainEvent(Guid BrandId) : IDomainEvent;
