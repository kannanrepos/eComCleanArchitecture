using FluentValidation;


namespace Product.Application.Entities.Product.Commands.Delete;

public class DeleteProductCommandValidator : AbstractValidator<DeleteProductCommand>
{
  public DeleteProductCommandValidator()
  {
    RuleFor(c => c.ProductId).NotEmpty().WithMessage("Product Id is required");
  }
}

