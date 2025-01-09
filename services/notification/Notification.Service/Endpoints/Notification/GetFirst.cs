using System;
using AutoMapper;
using Notification.Service.Contracts;
using Notification.Service.Data.Repository;

namespace Notification.Service.Endpoints.Notification;

public class GetFirst : IEndpoint
{
    public void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapGet("/notification", async (INotificationMessageRepository repository, IMapper mapper, CancellationToken cancellationToken = default) =>
        {
            var result = await repository.GetFirstAsync(cancellationToken);
            return Results.Ok(mapper.Map<NotificationResponse>(result));
        }).WithTags(Tags.MESSAGE_NOTIFICATION);
    }
}
