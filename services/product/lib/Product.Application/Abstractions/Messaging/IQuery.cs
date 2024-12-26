using MediatR;
using Ecom.Shared.Models;
namespace Product.Application.Abstractions.Messaging;

public interface IQuery<TResponse> : IRequest<Result<TResponse>>;

