using Microsoft.EntityFrameworkCore;
using Notification.Service.Data;
using Notification.Service.Data.Entities;

namespace Notification.Service.Data.Repository;

public class NotificationMessageRepository(ApplicationDbContext dbContext) : Repository<NotificationMessage>(dbContext), INotificationMessageRepository
{
  public async Task<NotificationMessage?> GetFirstAsync(CancellationToken cancellationToken)
  {
    return await dbContext.NotificationMessages.OrderByDescending(x => x.CreatedAt).FirstOrDefaultAsync(x => x.IsDeleted == false, cancellationToken);
  }
}
