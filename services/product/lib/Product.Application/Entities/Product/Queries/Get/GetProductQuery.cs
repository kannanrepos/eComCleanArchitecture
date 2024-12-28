using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Product.Queries.Get;

public sealed record GetProductQuery() : IQuery<List<ProductResponse>>;

