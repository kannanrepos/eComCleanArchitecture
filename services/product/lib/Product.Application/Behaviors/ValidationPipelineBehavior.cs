using System.Reflection;
using FluentValidation;
using FluentValidation.Results;
using MediatR;
using Ecom.Shared.Models;
using Ecom.Shared;
namespace Product.Application.Behaviors;

internal sealed class ValidationPipelineBehavior<TRequest, TResponse>(
    IEnumerable<IValidator<TRequest>> validators)
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : class
{
  public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
  {
    ValidationFailure[] validationFailures = await ValidateAsync(request);
    if (validationFailures.Length == 0)
    {
      return await next();
    }
    if (typeof(TResponse).IsGenericType &&
            typeof(TResponse).GetGenericTypeDefinition() == typeof(Result<>))
    {
      Type resultType = typeof(TResponse).GetGenericArguments()[0];
      MethodInfo? failureMethod = typeof(Result<>)
              .MakeGenericType(resultType)
              .GetMethod(nameof(Result<object>.ValidationFailure));
      if (failureMethod is not null)
      {
        object? result = failureMethod.Invoke(
            null,
            [CreateValidationError(validationFailures)]);
        return result is TResponse typedResult ? typedResult : throw new InvalidOperationException("Invalid result type");
      }
      else if (typeof(TResponse) == typeof(Result))
      {
        return (TResponse)(object)Result.Failure(CreateValidationError(validationFailures));
      }

      throw new ValidationException(validationFailures);
    }

    throw new InvalidOperationException("Unsupported response type");
  }
  private async Task<ValidationFailure[]> ValidateAsync(TRequest request)
  {
    if (!validators.Any())
    {
      return [];
    }

    var context = new ValidationContext<TRequest>(request);

    ValidationResult[] validationResults = await Task.WhenAll(
        validators.Select(validator => validator.ValidateAsync(context)));

    ValidationFailure[] validationFailures = validationResults
        .Where(validationResult => !validationResult.IsValid)
        .SelectMany(validationResult => validationResult.Errors)
        .ToArray();

    return validationFailures;
  }
  private static ValidationError CreateValidationError(ValidationFailure[] validationFailures) =>
     new(validationFailures.Select(f => Error.Problem(f.ErrorCode, f.ErrorMessage)).ToArray());

}
