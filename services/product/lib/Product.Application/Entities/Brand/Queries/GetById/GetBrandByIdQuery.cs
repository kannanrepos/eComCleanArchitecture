
using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Brand.Queries.GetById;

public sealed record GetBrandByIdQuery(Guid BrandId) : IQuery<BrandResponse>;
