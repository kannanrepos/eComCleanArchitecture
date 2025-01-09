using System;
using AutoMapper;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Category.Queries.GetById;

public class GetCategoryByIdQueryHandler(ICategoryRepository CategoryRepository, IMapper mapper) : IQueryHandler<GetCategoryByIdQuery, CategoryResponse>
{
  public async Task<Result<CategoryResponse>> Handle(GetCategoryByIdQuery query, CancellationToken cancellationToken)
  {
    // if (query.CategoryId== Guid.Empty)
    // {
    //   return Result.Failure<CategoryResponse>(new Error("400","CategoryId is required", Ecom.Shared.ErrorType.NotFound));
    // }
    var data = await CategoryRepository.GetByIdAsync(query.CategoryId, cancellationToken);
    return mapper.Map<CategoryResponse>(data);
  }
}
