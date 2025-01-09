using System;
using FluentValidation;

namespace Product.Application.Entities.Brand.Commands.Update;

public class UpdateBrandCommandValidator : AbstractValidator<UpdateBrandCommand>
{
  public UpdateBrandCommandValidator()
  {
    RuleFor(c => c.Id).NotEmpty();
    RuleFor(c => c.Name).NotEmpty().MinimumLength(3).MaximumLength(55);
    RuleFor(c => c.Description).MaximumLength(255);
  }
}
