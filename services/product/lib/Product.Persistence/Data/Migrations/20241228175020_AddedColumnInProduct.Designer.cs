﻿// <auto-generated />
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Product.Persistence.Data;

#nullable disable

namespace Product.Persistence.Data.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20241228175020_AddedColumnInProduct")]
    partial class AddedColumnInProduct
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("public")
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Product.Domain.Entities.Brand", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("id");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone")
                        .HasColumnName("created_at");

                    b.Property<Guid>("CreatedBy")
                        .HasColumnType("uuid")
                        .HasColumnName("created_by");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("description");

                    b.Property<bool>("IsActive")
                        .HasColumnType("boolean")
                        .HasColumnName("is_active");

                    b.Property<DateTime>("ModifiedAt")
                        .HasColumnType("timestamp with time zone")
                        .HasColumnName("modified_at");

                    b.Property<Guid>("ModifiedBy")
                        .HasColumnType("uuid")
                        .HasColumnName("modified_by");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.HasKey("Id")
                        .HasName("pk_brands");

                    b.ToTable("brands", "public");
                });

            modelBuilder.Entity("Product.Domain.Entities.Category", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("id");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone")
                        .HasColumnName("created_at");

                    b.Property<Guid>("CreatedBy")
                        .HasColumnType("uuid")
                        .HasColumnName("created_by");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("description");

                    b.Property<bool>("IsActive")
                        .HasColumnType("boolean")
                        .HasColumnName("is_active");

                    b.Property<DateTime>("ModifiedAt")
                        .HasColumnType("timestamp with time zone")
                        .HasColumnName("modified_at");

                    b.Property<Guid>("ModifiedBy")
                        .HasColumnType("uuid")
                        .HasColumnName("modified_by");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.Property<Guid?>("ParentId")
                        .HasColumnType("uuid")
                        .HasColumnName("parent_id");

                    b.HasKey("Id")
                        .HasName("pk_categories");

                    b.HasIndex("ParentId")
                        .HasDatabaseName("ix_categories_parent_id");

                    b.ToTable("categories", "public");
                });

            modelBuilder.Entity("Product.Domain.Entities.Products", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("id");

                    b.Property<Guid?>("BrandId")
                        .HasColumnType("uuid")
                        .HasColumnName("brand_id");

                    b.Property<Guid?>("CategoryId")
                        .HasColumnType("uuid")
                        .HasColumnName("category_id");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone")
                        .HasColumnName("created_at");

                    b.Property<Guid>("CreatedBy")
                        .HasColumnType("uuid")
                        .HasColumnName("created_by");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("description");

                    b.Property<decimal>("DiscountPercentage")
                        .HasColumnType("numeric")
                        .HasColumnName("discount_percentage");

                    b.Property<bool>("IsActive")
                        .HasColumnType("boolean")
                        .HasColumnName("is_active");

                    b.Property<int>("LowStockThreshold")
                        .HasColumnType("integer")
                        .HasColumnName("low_stock_threshold");

                    b.Property<decimal>("MRP")
                        .HasColumnType("numeric")
                        .HasColumnName("mrp");

                    b.Property<DateTime>("ModifiedAt")
                        .HasColumnType("timestamp with time zone")
                        .HasColumnName("modified_at");

                    b.Property<Guid>("ModifiedBy")
                        .HasColumnType("uuid")
                        .HasColumnName("modified_by");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.Property<decimal>("Price")
                        .HasColumnType("numeric")
                        .HasColumnName("price");

                    b.Property<int>("Rating")
                        .HasColumnType("integer")
                        .HasColumnName("rating");

                    b.Property<string>("SKU")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("sku");

                    b.Property<string>("ShortDescription")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("short_description");

                    b.Property<int>("Stock")
                        .HasColumnType("integer")
                        .HasColumnName("stock");

                    b.HasKey("Id")
                        .HasName("pk_products");

                    b.HasIndex("BrandId")
                        .HasDatabaseName("ix_products_brand_id");

                    b.HasIndex("CategoryId")
                        .HasDatabaseName("ix_products_category_id");

                    b.HasIndex("SKU")
                        .IsUnique()
                        .HasDatabaseName("ix_products_sku");

                    b.ToTable("products", "public");
                });

            modelBuilder.Entity("Product.Domain.Entities.Category", b =>
                {
                    b.HasOne("Product.Domain.Entities.Category", "ParentCategory")
                        .WithMany("ChildCategories")
                        .HasForeignKey("ParentId")
                        .OnDelete(DeleteBehavior.SetNull)
                        .HasConstraintName("fk_categories_categories_parent_id");

                    b.Navigation("ParentCategory");
                });

            modelBuilder.Entity("Product.Domain.Entities.Products", b =>
                {
                    b.HasOne("Product.Domain.Entities.Brand", "Brand")
                        .WithMany("Products")
                        .HasForeignKey("BrandId")
                        .OnDelete(DeleteBehavior.SetNull)
                        .HasConstraintName("fk_products_brands_brand_id");

                    b.HasOne("Product.Domain.Entities.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.SetNull)
                        .HasConstraintName("fk_products_categories_category_id");

                    b.OwnsMany("Product.Domain.ValueObjects.ProductAttribute", "ProductAttributes", b1 =>
                        {
                            b1.Property<Guid>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("uuid")
                                .HasColumnName("id");

                            b1.Property<DateTime>("CreatedAt")
                                .HasColumnType("timestamp with time zone")
                                .HasColumnName("created_at");

                            b1.Property<Guid>("CreatedBy")
                                .HasColumnType("uuid")
                                .HasColumnName("created_by");

                            b1.Property<bool>("IsActive")
                                .HasColumnType("boolean")
                                .HasColumnName("is_active");

                            b1.Property<DateTime>("ModifiedAt")
                                .HasColumnType("timestamp with time zone")
                                .HasColumnName("modified_at");

                            b1.Property<Guid>("ModifiedBy")
                                .HasColumnType("uuid")
                                .HasColumnName("modified_by");

                            b1.Property<string>("Name")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("name");

                            b1.Property<Guid?>("ParentProductAttributeId")
                                .HasColumnType("uuid")
                                .HasColumnName("parent_product_attribute_id");

                            b1.Property<Guid>("ProductId")
                                .HasColumnType("uuid")
                                .HasColumnName("product_id");

                            b1.Property<string>("Value")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("value");

                            b1.HasKey("Id")
                                .HasName("pk_products_product_attributes");

                            b1.HasIndex("ProductId")
                                .HasDatabaseName("ix_products_product_attributes_product_id");

                            b1.ToTable("products_product_attributes", "public");

                            b1.WithOwner()
                                .HasForeignKey("ProductId")
                                .HasConstraintName("fk_products_product_attributes_products_product_id");

                            b1.OwnsMany("Product.Domain.ValueObjects.ProductAttribute.ChildProductAttributes#ProductAttribute", "ChildProductAttributes", b2 =>
                                {
                                    b2.Property<Guid>("Id")
                                        .ValueGeneratedOnAdd()
                                        .HasColumnType("uuid")
                                        .HasColumnName("id");

                                    b2.Property<DateTime>("CreatedAt")
                                        .HasColumnType("timestamp with time zone")
                                        .HasColumnName("created_at");

                                    b2.Property<Guid>("CreatedBy")
                                        .HasColumnType("uuid")
                                        .HasColumnName("created_by");

                                    b2.Property<bool>("IsActive")
                                        .HasColumnType("boolean")
                                        .HasColumnName("is_active");

                                    b2.Property<DateTime>("ModifiedAt")
                                        .HasColumnType("timestamp with time zone")
                                        .HasColumnName("modified_at");

                                    b2.Property<Guid>("ModifiedBy")
                                        .HasColumnType("uuid")
                                        .HasColumnName("modified_by");

                                    b2.Property<string>("Name")
                                        .IsRequired()
                                        .HasColumnType("text")
                                        .HasColumnName("name");

                                    b2.Property<Guid>("ParentProductAttributeId")
                                        .HasColumnType("uuid")
                                        .HasColumnName("parent_product_attribute_id");

                                    b2.Property<string>("Value")
                                        .IsRequired()
                                        .HasColumnType("text")
                                        .HasColumnName("value");

                                    b2.HasKey("Id")
                                        .HasName("pk_product_attribute");

                                    b2.HasIndex("ParentProductAttributeId")
                                        .HasDatabaseName("ix_product_attribute_parent_product_attribute_id");

                                    b2.ToTable("product_attribute", "public");

                                    b2.WithOwner()
                                        .HasForeignKey("ParentProductAttributeId")
                                        .HasConstraintName("fk_product_attribute_products_product_attributes_parent_produc");

                                    b2.OwnsOne("Product.Domain.ValueObjects.ProductImage", "ProductImages", b3 =>
                                        {
                                            b3.Property<Guid>("ProductAttributeId")
                                                .HasColumnType("uuid")
                                                .HasColumnName("id");

                                            b3.PrimitiveCollection<List<string>>("ProductImages")
                                                .IsRequired()
                                                .HasColumnType("text[]")
                                                .HasColumnName("product_images_product_images");

                                            b3.PrimitiveCollection<List<string>>("ThumpImages")
                                                .IsRequired()
                                                .HasColumnType("text[]")
                                                .HasColumnName("product_images_thump_images");

                                            b3.HasKey("ProductAttributeId")
                                                .HasName("pk_product_attribute");

                                            b3.ToTable("product_attribute", "public");

                                            b3.WithOwner()
                                                .HasForeignKey("ProductAttributeId")
                                                .HasConstraintName("fk_product_attribute_product_attribute_id");
                                        });

                                    b2.Navigation("ProductImages")
                                        .IsRequired();
                                });

                            b1.OwnsOne("Product.Domain.ValueObjects.ProductImage", "ProductImages", b2 =>
                                {
                                    b2.Property<Guid>("ProductAttributeId")
                                        .HasColumnType("uuid")
                                        .HasColumnName("id");

                                    b2.PrimitiveCollection<List<string>>("ProductImages")
                                        .IsRequired()
                                        .HasColumnType("text[]")
                                        .HasColumnName("product_images_product_images");

                                    b2.PrimitiveCollection<List<string>>("ThumpImages")
                                        .IsRequired()
                                        .HasColumnType("text[]")
                                        .HasColumnName("product_images_thump_images");

                                    b2.HasKey("ProductAttributeId");

                                    b2.ToTable("products_product_attributes", "public");

                                    b2.WithOwner()
                                        .HasForeignKey("ProductAttributeId")
                                        .HasConstraintName("fk_products_product_attributes_products_product_attributes_id");
                                });

                            b1.Navigation("ChildProductAttributes");

                            b1.Navigation("ProductImages")
                                .IsRequired();
                        });

                    b.OwnsOne("Product.Domain.ValueObjects.ProductImage", "ProductIconImage", b1 =>
                        {
                            b1.Property<Guid>("ProductsId")
                                .HasColumnType("uuid")
                                .HasColumnName("id");

                            b1.PrimitiveCollection<List<string>>("ProductImages")
                                .IsRequired()
                                .HasColumnType("text[]")
                                .HasColumnName("product_icon_image_product_images");

                            b1.PrimitiveCollection<List<string>>("ThumpImages")
                                .IsRequired()
                                .HasColumnType("text[]")
                                .HasColumnName("product_icon_image_thump_images");

                            b1.HasKey("ProductsId");

                            b1.ToTable("products", "public");

                            b1.WithOwner()
                                .HasForeignKey("ProductsId")
                                .HasConstraintName("fk_products_products_id");
                        });

                    b.OwnsOne("Product.Domain.ValueObjects.ProductImage", "ProductImages", b1 =>
                        {
                            b1.Property<Guid>("ProductsId")
                                .HasColumnType("uuid")
                                .HasColumnName("id");

                            b1.PrimitiveCollection<List<string>>("ProductImages")
                                .IsRequired()
                                .HasColumnType("text[]")
                                .HasColumnName("product_images_product_images");

                            b1.PrimitiveCollection<List<string>>("ThumpImages")
                                .IsRequired()
                                .HasColumnType("text[]")
                                .HasColumnName("product_images_thump_images");

                            b1.HasKey("ProductsId");

                            b1.ToTable("products", "public");

                            b1.WithOwner()
                                .HasForeignKey("ProductsId")
                                .HasConstraintName("fk_products_products_id");
                        });

                    b.Navigation("Brand");

                    b.Navigation("Category");

                    b.Navigation("ProductAttributes");

                    b.Navigation("ProductIconImage")
                        .IsRequired();

                    b.Navigation("ProductImages")
                        .IsRequired();
                });

            modelBuilder.Entity("Product.Domain.Entities.Brand", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("Product.Domain.Entities.Category", b =>
                {
                    b.Navigation("ChildCategories");

                    b.Navigation("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
