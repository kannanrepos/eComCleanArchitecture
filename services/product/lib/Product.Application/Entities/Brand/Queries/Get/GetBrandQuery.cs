using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Brand.Queries.Get;

public sealed record GetBrandQuery() : IQuery<List<BrandResponse>>;

