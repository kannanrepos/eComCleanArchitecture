using System;
using FluentValidation;

namespace Product.Application.Entities.Category.Commands.Update;

public class UpdateCategoryCommandValidator : AbstractValidator<UpdateCategoryCommand>
{
  public UpdateCategoryCommandValidator()
  {
    RuleFor(c => c.Id).NotEmpty();
    RuleFor(c => c.Name).NotEmpty().MinimumLength(3).MaximumLength(55);
    RuleFor(c => c.Description).MaximumLength(255);
  }
}
