using System;
using Notification.Service.Data.Entities;

namespace Notification.Service.Data.Repository;

public interface INotificationMessageRepository : IRepository<NotificationMessage>
{
  Task<NotificationMessage?> GetFirstAsync(CancellationToken cancellationToken);

}
