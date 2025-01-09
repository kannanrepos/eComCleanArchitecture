using FluentValidation;

namespace Product.Application.Entities.Brand.Commands.Create;

public class CreateBrandCommandValidator : AbstractValidator<CreateBrandCommand>
{
  public CreateBrandCommandValidator()
  {
    RuleFor(c => c.Name).NotEmpty().MinimumLength(3).MaximumLength(55);
    RuleFor(c => c.Description).MaximumLength(255);
  }
}
