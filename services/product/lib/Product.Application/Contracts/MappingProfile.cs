using System;
using AutoMapper;
using Product.Application.Entities.Brand.Commands.Create;
using Product.Application.Entities.Brand.Queries;
using Product.Domain.Entities;

namespace Product.Application.Contracts;

public class MappingProfile : Profile
{
  public MappingProfile()
  {
    CreateMap<CreateBrandCommand, Brand>();
    CreateMap<Brand, BrandResponse>();
  }
}
