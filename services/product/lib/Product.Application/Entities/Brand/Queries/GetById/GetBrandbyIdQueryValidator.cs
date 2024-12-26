using System;
using FluentValidation;

namespace Product.Application.Entities.Brand.Queries.GetById;

public class GetBrandbyIdQueryValidator : AbstractValidator<GetBrandByIdQuery>
{
  public GetBrandbyIdQueryValidator()
  {
    RuleFor(c => c.BrandId).NotEmpty().WithMessage("Brand Id is required");
  }
}
