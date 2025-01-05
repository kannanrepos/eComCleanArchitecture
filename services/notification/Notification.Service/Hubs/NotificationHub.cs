using System;
using Microsoft.AspNetCore.SignalR;

namespace Notification.Service.Hubs;

public class NotificationHub : Hub
{
  private static readonly List<UserMessage> MessageHistory =[];
  public async Task PostMessage(string content)
  {
    var senderId = Context.ConnectionId;
    var userMessage = new UserMessage
    {
      Sender = senderId,
      Content = content,
      SentTime = DateTime.UtcNow
    };
    MessageHistory.Add(userMessage);
    await Clients.Others.SendAsync("NotificationMessage", senderId, content, userMessage.SentTime);
  }
    public async Task RetrieveMessageHistory() =>
            await Clients.Caller.SendAsync("MessageHistory", MessageHistory);
}
