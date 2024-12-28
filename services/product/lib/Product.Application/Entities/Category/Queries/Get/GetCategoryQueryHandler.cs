using AutoMapper;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Category.Queries.Get;

public class GetCategoryQueryHandler(ICategoryRepository CategoryRepository, IMapper mapper) : IQueryHandler<GetCategoryQuery, List<CategoryResponse>>
{
  public async Task<Result<List<CategoryResponse>>> Handle(GetCategoryQuery query, CancellationToken cancellationToken)
  {

    var data = await CategoryRepository.GetAllAsync(cancellationToken);
    return mapper.Map<List<CategoryResponse>>(data);
  }
}
