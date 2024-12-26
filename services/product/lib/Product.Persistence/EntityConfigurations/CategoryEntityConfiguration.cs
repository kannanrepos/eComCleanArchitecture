using System;
using Microsoft.EntityFrameworkCore;
using Product.Domain.Entities;

namespace Product.Persistence.EntityConfigurations;

public class CategoryEntityConfiguration : IEntityTypeConfiguration<Category>
{
  public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Category> builder)
  {
    builder.HasKey(t => t.Id);

    builder.Property(t => t.CreatedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);
    builder.Property(t => t.ModifiedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);

    builder.HasOne<Category>().WithMany().HasForeignKey(t => t.ParentId);
  }
}
