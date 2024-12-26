using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Product.Domain.Entities;

namespace Product.Persistence.EntityConfigurations;

public class ProductEntityConfiguration : IEntityTypeConfiguration<Products>
{
  public void Configure(EntityTypeBuilder<Products> builder)
  {
    builder.HasKey(t => t.Id);

    builder.Property(t => t.CreatedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);
    builder.Property(t => t.ModifiedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);

    builder.HasIndex(u => u.SKU).IsUnique();
    builder.HasOne<Brand>().WithMany().HasForeignKey(t => t.BrandId);
    builder.HasOne<Category>().WithMany().HasForeignKey(t => t.CategoryId);
  }
}