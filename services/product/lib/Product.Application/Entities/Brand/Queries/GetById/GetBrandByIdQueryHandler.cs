using System;
using AutoMapper;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Brand.Queries.GetById;

public class GetBrandByIdQueryHandler(IBrandRepository brandRepository, IMapper mapper) : IQueryHandler<GetBrandByIdQuery, BrandResponse>
{
  public async Task<Result<BrandResponse>> Handle(GetBrandByIdQuery query, CancellationToken cancellationToken)
  {
    // if (query.BrandId== Guid.Empty)
    // {
    //   return Result.Failure<BrandResponse>(new Error("400","BrandId is required", Ecom.Shared.ErrorType.NotFound));
    // }
    var data = await brandRepository.GetByIdAsync(query.BrandId, cancellationToken);
    return mapper.Map<BrandResponse>(data);
  }
}
