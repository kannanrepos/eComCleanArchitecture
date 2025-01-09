using FluentValidation;

namespace Product.Application.Entities.Product.Commands.Create;

public class CreateProductCommandValidator : AbstractValidator<CreateProductCommand>
{
  public CreateProductCommandValidator()
  {
    RuleFor(c => c.Name).NotEmpty().MinimumLength(3).MaximumLength(55);
    RuleFor(c => c.Description).MaximumLength(255);
  }
}
