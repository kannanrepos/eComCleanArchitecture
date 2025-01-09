
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Notification.Service.Data.Entities;
using Notification.Service.Data.Repository;
using Notification.Service.Hubs;

namespace Notification.Service.Endpoints.Notification;

public class Create : IEndpoint
{
  public class Request
  {
    public required string message { get; set; }
  }
  public void MapEndpoint(IEndpointRouteBuilder app)
  {
    app.MapPost("/notifications", async ([FromBody] Request request, IHubContext<NotificationHub> hubContext, INotificationMessageRepository repository, CancellationToken cancellationToken) =>
    {
      await repository.AddAsync(new NotificationMessage { Message = request.message }, cancellationToken);
      await hubContext.Clients.All.SendAsync("NotificationMessage", request.message, cancellationToken);
      return Results.Ok();
    }).WithTags(Tags.MESSAGE_NOTIFICATION);
  }
}