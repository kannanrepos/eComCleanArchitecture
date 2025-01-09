
using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Product.Queries.GetById;

public sealed record GetProductByIdQuery(Guid ProductId) : IQuery<ProductResponse>;
