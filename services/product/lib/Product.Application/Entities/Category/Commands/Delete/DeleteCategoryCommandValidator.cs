using FluentValidation;


namespace Product.Application.Entities.Category.Commands.Delete;

public class DeleteCategoryCommandValidator : AbstractValidator<DeleteCategoryCommand>
{
  public DeleteCategoryCommandValidator()
  {
    RuleFor(c => c.CategoryId).NotEmpty().WithMessage("Category Id is required");
  }
}

