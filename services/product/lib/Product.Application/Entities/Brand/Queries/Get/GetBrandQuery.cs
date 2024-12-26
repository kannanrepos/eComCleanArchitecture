using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Brand.Queries.Get;

public sealed record GetBrandQuery(Guid BrandId) : IQuery<List<BrandResponse>>;

