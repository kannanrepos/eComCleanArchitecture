using System;
using FluentValidation;

namespace Product.Application.Entities.Category.Queries.GetById;

public class GetCategorybyIdQueryValidator : AbstractValidator<GetCategoryByIdQuery>
{
  public GetCategorybyIdQueryValidator()
  {
    RuleFor(c => c.CategoryId).NotEmpty().WithMessage("Category Id is required");
  }
}
