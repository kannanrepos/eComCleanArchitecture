using AutoMapper;
using Product.Application.Entities.Brand.Commands.Create;
using Product.Application.Entities.Brand.Queries;
using Product.Application.Entities.Category.Commands.Create;
using Product.Application.Entities.Category.Queries;
using Product.Application.Entities.Product.Commands.Create;
using Product.Application.Entities.Product.Queries;
using Product.Domain.Entities;

namespace Product.Application.Contracts;

public class MappingProfile : Profile
{
  public MappingProfile()
  {
    CreateMap<CreateBrandCommand, Brand>();
    CreateMap<Brand, BrandResponse>();
    CreateMap<CreateCategoryCommand, Category>();
    CreateMap<Category, CategoryResponse>();
    CreateMap<CreateProductCommand, Products>();
    CreateMap<Products, ProductResponse>();
    CreateMap<ProductImage, Domain.ValueObjects.ProductImage>().ReverseMap();
    CreateMap<ProductAttribute, Domain.ValueObjects.ProductAttribute>().ReverseMap();
  }
}
