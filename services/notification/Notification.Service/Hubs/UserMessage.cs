namespace Notification.Service.Hubs;

public class UserMessage
{
  public required string Sender { get; set; }
  public required string Content { get; set; }
  public DateTime SentTime { get; set; }
}
