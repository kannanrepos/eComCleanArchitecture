using FluentValidation;


namespace Product.Application.Entities.Brand.Commands.Delete;

public class DeleteBrandCommandValidator : AbstractValidator<DeleteBrandCommand>
{
  public DeleteBrandCommandValidator()
  {
    RuleFor(c => c.BrandId).NotEmpty().WithMessage("Brand Id is required");
  }
}

