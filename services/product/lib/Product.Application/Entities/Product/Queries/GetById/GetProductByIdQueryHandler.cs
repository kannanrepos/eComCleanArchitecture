using System;
using AutoMapper;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Product.Queries.GetById;

public class GetProductByIdQueryHandler(IProductRepository ProductRepository, IMapper mapper) : IQueryHandler<GetProductByIdQuery, ProductResponse>
{
  public async Task<Result<ProductResponse>> Handle(GetProductByIdQuery query, CancellationToken cancellationToken)
  {
    // if (query.ProductId== Guid.Empty)
    // {
    //   return Result.Failure<ProductResponse>(new Error("400","ProductId is required", Ecom.Shared.ErrorType.NotFound));
    // }
    var data = await ProductRepository.GetByIdAsync(query.ProductId, cancellationToken);
    return mapper.Map<ProductResponse>(data);
  }
}
