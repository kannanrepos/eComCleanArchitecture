using AutoMapper;
using Ecom.Shared.Models;
using Product.Application.Abstractions.Messaging;
using Product.Domain.Repositories;

namespace Product.Application.Entities.Product.Queries.Get;

public class GetProductQueryHandler(IProductRepository ProductRepository, IMapper mapper) : IQueryHandler<GetProductQuery, List<ProductResponse>>
{
  public async Task<Result<List<ProductResponse>>> Handle(GetProductQuery query, CancellationToken cancellationToken)
  {

    var data = await ProductRepository.GetAllAsync(cancellationToken);
    return mapper.Map<List<ProductResponse>>(data);
  }
}
