using FluentValidation;

namespace Product.Application.Entities.Category.Commands.Create;

public class CreateCategoryCommandValidator : AbstractValidator<CreateCategoryCommand>
{
  public CreateCategoryCommandValidator()
  {
    RuleFor(c => c.Name).NotEmpty().MinimumLength(3).MaximumLength(55);
    RuleFor(c => c.Description).MaximumLength(255);
  }
}
