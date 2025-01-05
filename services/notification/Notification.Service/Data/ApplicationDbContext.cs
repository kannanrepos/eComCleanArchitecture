using Microsoft.EntityFrameworkCore;
using Notification.Service.Data.Entities;

namespace Notification.Service.Data;

public class ApplicationDbContext(DbContextOptions options) : DbContext(options)
{
  public required DbSet<NotificationMessage> NotificationMessages { get; set; }
  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);
    modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
    modelBuilder.HasDefaultSchema(Schemas.Default);
  }
}
