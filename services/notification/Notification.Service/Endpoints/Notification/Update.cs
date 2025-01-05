
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Notification.Service.Data.Entities;
using Notification.Service.Data.Repository;
using Notification.Service.Hubs;

namespace Notification.Service.Endpoints.Notification;

public class Update : IEndpoint
{
  public class Request
  {
    public required string message { get; set; }
  }
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapPut("/notifications/{id}", async (string id, [FromBody] Request request, IHubContext<NotificationHub> hubContext, INotificationMessageRepository repository, CancellationToken cancellationToken = default) =>
    {
      await repository.UpdateAsync(new NotificationMessage { Id = id, Message = request.message }, cancellationToken);
      await hubContext.Clients.All.SendAsync("NotificationMessage", request.message, cancellationToken);
      return Results.Ok();
    }).WithTags(Tags.MESSAGE_NOTIFICATION);
  }
}
