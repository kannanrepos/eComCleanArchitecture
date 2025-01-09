using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Notification.Service.Data.Entities;

namespace Notification.Service.Data.EntityConfigurations;

public class NotificationMessageEntityConfig : IEntityTypeConfiguration<NotificationMessage>
{
  public void Configure(EntityTypeBuilder<NotificationMessage> builder)
  {
    builder.HasKey(b => b.Id);
    builder.Property(t => t.CreatedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);
    builder.Property(t => t.UpdatedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);
  }
}
