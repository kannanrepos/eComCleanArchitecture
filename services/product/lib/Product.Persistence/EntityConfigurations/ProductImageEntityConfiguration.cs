using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Product.Domain.Entities;

namespace Product.Persistence.EntityConfigurations;

public class ProductImageEntityConfiguration : IEntityTypeConfiguration<ProductImage>
{
  public void Configure(EntityTypeBuilder<ProductImage> builder)
  {
    builder.HasKey(t => t.Id);

    builder.Property(t => t.CreatedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);
    builder.Property(t => t.ModifiedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);

    builder.HasOne<Products>().WithMany().HasForeignKey(t => t.ProductId);
  }
}
