using System;
using FluentValidation;

namespace Product.Application.Entities.Product.Queries.GetById;

public class GetProductbyIdQueryValidator : AbstractValidator<GetProductByIdQuery>
{
  public GetProductbyIdQueryValidator()
  {
    RuleFor(c => c.ProductId).NotEmpty().WithMessage("Product Id is required");
  }
}
