using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Category.Queries.Get;

public sealed record GetCategoryQuery() : IQuery<List<CategoryResponse>>;

