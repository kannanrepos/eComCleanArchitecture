
using AutoMapper;
using Notification.Service.Contracts;
using Notification.Service.Data.Repository;

namespace Notification.Service.Endpoints.Notification;

public class Get : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {

    app.MapGet("/notifications/{id}", async (string id, INotificationMessageRepository repository, IMapper mapper, CancellationToken cancellationToken = default) =>
    {
      var result = await repository.GetByIdAsync(id, cancellationToken);
      return Results.Ok(mapper.Map<NotificationResponse>(result));
    }).WithTags(Tags.MESSAGE_NOTIFICATION);
  }
}
