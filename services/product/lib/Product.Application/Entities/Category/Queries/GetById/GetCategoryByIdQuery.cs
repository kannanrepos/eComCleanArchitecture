
using Product.Application.Abstractions.Messaging;

namespace Product.Application.Entities.Category.Queries.GetById;

public sealed record GetCategoryByIdQuery(Guid CategoryId) : IQuery<CategoryResponse>;
