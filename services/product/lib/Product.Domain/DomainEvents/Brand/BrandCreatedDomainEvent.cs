using Ecom.Shared;

namespace Product.Domain.DomainEvents.Brand;

public sealed record class
BrandCreatedDomainEvent(Guid BrandId) : IDomainEvent;
