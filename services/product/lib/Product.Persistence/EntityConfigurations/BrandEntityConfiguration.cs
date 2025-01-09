using Ecom.Shared.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Product.Persistence.EntityConfigurations;

public class EntityConfiguration<T> : IEntityTypeConfiguration<T> where T : class, IBaseEntity
{
  public void Configure(EntityTypeBuilder<T> builder)
  {
    // Configure the primary key for Brand
    builder.HasKey(b => b.Id);

    builder.Property(t => t.CreatedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);
    builder.Property(t => t.ModifiedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);
  }
}
