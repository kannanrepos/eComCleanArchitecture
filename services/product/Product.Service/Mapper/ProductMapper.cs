using AutoMapper;
using Product.Application.Entities.Product.Commands.Create;
using static Product.Service.Endpoints.Product.Create;

namespace Product.Service.Mapper;

public class ProductMapper : Profile
{
  public ProductMapper()
  {
    // CreateMap<CreateProductRequest, CreateProductCommand>().ReverseMap();
    // CreateMap<ProductAttribute, Domain.ValueObjects.ProductAttribute>().ReverseMap();
  }
}
