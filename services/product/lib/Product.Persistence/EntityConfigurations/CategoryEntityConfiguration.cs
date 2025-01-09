using System;
using Microsoft.EntityFrameworkCore;
using Product.Domain.Entities;

namespace Product.Persistence.EntityConfigurations;

public class CategoryEntityConfiguration : IEntityTypeConfiguration<Category>
{
  public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Category> builder)
  {
    // Configure the primary key for Brand
    builder.HasKey(b => b.Id);

    builder.Property(t => t.CreatedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);
    builder.Property(t => t.ModifiedAt).HasConversion(d => DateTime.SpecifyKind(d, DateTimeKind.Utc), v => v);
    builder.HasOne(c => c.ParentCategory)  // A Category has one ParentCategory
               .WithMany(c => c.ChildCategories)  // A Category can have many ChildCategories
               .HasForeignKey(c => c.ParentId)  // The foreign key is ParentId
               .OnDelete(DeleteBehavior.SetNull); // Optional: Set null if ParentCategory is deleted
  }
}
