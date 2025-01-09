using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Product.Domain.Entities;

namespace Product.Persistence.EntityConfigurations;

public class ProductEntityConfiguration : IEntityTypeConfiguration<Products>
{
  public void Configure(EntityTypeBuilder<Products> builder)
  {
    // Configure the primary key for Products
    builder.HasKey(b => b.Id);

    builder.Property(t => t.CreatedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);
    builder.Property(t => t.ModifiedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);

    // Configure value objects
    builder.OwnsOne(t => t.ProductIconImage);  // ProductIconImage as owned
    builder.OwnsOne(t => t.ProductImages);     // ProductImages as owned

    // Configure ProductAttributes as an owned collection
    builder.OwnsMany(t => t.ProductAttributes, a =>
    {
      a.WithOwner().HasForeignKey("ProductId");  // Foreign key for ProductAttribute to Product

      // Configure the nested ChildProductAttributes (recursive relationship)
      a.OwnsMany(p => p.ChildProductAttributes, pa =>
              {
                pa.WithOwner().HasForeignKey("ParentProductAttributeId");  // Foreign key for ChildProductAttribute (matching Id type)
              });
    });

    // Ensure SKU is unique
    builder.HasIndex(u => u.SKU).IsUnique();

    // Configure relationships with Brand and Category
    builder.HasOne(p => p.Brand) // A Product has one Brand
        .WithMany(b => b.Products) // A Brand has many Products
        .HasForeignKey(p => p.BrandId) // Foreign key is BrandId in Product referencing Id in Brand
        .OnDelete(DeleteBehavior.SetNull); // Optional: Set null if the Brand is deleted

    builder.HasOne(p => p.Category) // A Product has one Category
        .WithMany(b => b.Products) // A Category has many Products
        .HasForeignKey(p => p.CategoryId) // Foreign key is CategoryId in Product referencing Id in Category
        .OnDelete(DeleteBehavior.SetNull); // Optional: Set null if the Category is deleted
  }
}