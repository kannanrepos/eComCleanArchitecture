using Ecom.Shared;
using Ecom.Shared.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Product.Application.Abstractions.Data;
using Product.Domain.Entities;

namespace Product.Persistence.Data;
//, IPublisher publisher
public class ApplicationDbContext(DbContextOptions options) : DbContext(options)
, IApplicationDbContext
{
  public required DbSet<Brand> Brands { get; set; }
  public required DbSet<Category> Categories { get; set; }
  public required DbSet<ProductAttribute> ProductAttributes { get; set; }
  public required DbSet<ProductImage> ProductImages { get; set; }
  public required DbSet<Products> Products { get; set; }
  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);

    modelBuilder.HasDefaultSchema(Schemas.Default);
  }
  public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
  {
    // When should you publish domain events?
    //
    // 1. BEFORE calling SaveChangesAsync
    //     - domain events are part of the same transaction
    //     - immediate consistency
    // 2. AFTER calling SaveChangesAsync
    //     - domain events are a separate transaction
    //     - eventual consistency
    //     - handlers can fail

    int result = await base.SaveChangesAsync(cancellationToken);

    // await PublishDomainEventsAsync();

    return result;
  }
  // private async Task PublishDomainEventsAsync()
  // {
  //   var domainEvents = ChangeTracker
  //       .Entries<BaseEntity>()
  //       .Select(entry => entry.Entity)
  //       .SelectMany(entity =>
  //       {
  //         List<IDomainEvent> domainEvents = entity.DomainEvents;

  //         entity.ClearDomainEvents();

  //         return domainEvents;
  //       })
  //       .ToList();

  //   foreach (IDomainEvent domainEvent in domainEvents)
  //   {
  //     await publisher.Publish(domainEvent);
  //   }
  // }
}
