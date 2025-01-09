using System;
using FluentValidation;

namespace Product.Application.Entities.Product.Commands.Update;

public class UpdateProductCommandValidator : AbstractValidator<UpdateProductCommand>
{
  public UpdateProductCommandValidator()
  {
    RuleFor(c => c.Id).NotEmpty();
    RuleFor(c => c.Name).NotEmpty().MinimumLength(3).MaximumLength(55);
    RuleFor(c => c.Description).MaximumLength(255);
  }
}
