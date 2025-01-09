using AutoMapper;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Brand.Queries.Get;

public class GetBrandQueryHandler(IBrandRepository brandRepository, IMapper mapper) : IQueryHandler<GetBrandQuery, List<BrandResponse>>
{
  public async Task<Result<List<BrandResponse>>> Handle(GetBrandQuery query, CancellationToken cancellationToken)
  {

    var data = await brandRepository.GetAllAsync(cancellationToken);
    return mapper.Map<List<BrandResponse>>(data);
  }
}
