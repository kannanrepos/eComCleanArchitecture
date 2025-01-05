
using Notification.Service.Data.Repository;

namespace Notification.Service.Endpoints.Notification;

public class Delete : IEndpoint
{
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapDelete("/notifications/{id}", async (string id, INotificationMessageRepository repository, CancellationToken cancellationToken = default) =>
    {
      await repository.DeleteAsync(id, cancellationToken);
      return Results.Ok();
    }).WithTags(Tags.MESSAGE_NOTIFICATION);
  }
}
