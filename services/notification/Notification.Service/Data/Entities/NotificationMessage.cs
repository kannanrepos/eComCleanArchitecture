
namespace Notification.Service.Data.Entities;

public class NotificationMessage
{
  public string Id { get; set; } = Guid.NewGuid().ToString("N");
  public required string Message { get; set; }
  public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
  public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
  public bool IsDeleted { get; set; }
}
