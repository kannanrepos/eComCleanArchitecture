
using Notification.Service.Contracts;
using Notification.Service.Data.Repository;

namespace Notification.Service.Endpoints.Notification;

public class GetAll : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapGet("/notifications", async (
      [AsParameters] SortingAndPagingInfo query,
      HttpContext httpContext,
      INotificationMessageRepository repository,
      CancellationToken cancellationToken = default) =>
    {
      var request = httpContext.Request;
      var baseURL = $"{request.Scheme}://{request.Host}";
      var result = await repository.GetAllWithPagination(query, baseURL, cancellationToken);
      return Results.Ok(result);
    }).WithTags(Tags.MESSAGE_NOTIFICATION);
  }
}