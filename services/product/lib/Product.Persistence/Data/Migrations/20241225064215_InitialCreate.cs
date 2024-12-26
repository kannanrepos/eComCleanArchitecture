using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Product.Persistence.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "public");

            migrationBuilder.CreateTable(
                name: "brands",
                schema: "public",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    description = table.Column<string>(type: "text", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    created_by = table.Column<Guid>(type: "uuid", nullable: false),
                    modified_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    modified_by = table.Column<Guid>(type: "uuid", nullable: false),
                    is_active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_brands", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "categories",
                schema: "public",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    description = table.Column<string>(type: "text", nullable: false),
                    parent_id = table.Column<Guid>(type: "uuid", nullable: false),
                    category_id = table.Column<Guid>(type: "uuid", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    created_by = table.Column<Guid>(type: "uuid", nullable: false),
                    modified_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    modified_by = table.Column<Guid>(type: "uuid", nullable: false),
                    is_active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_categories", x => x.id);
                    table.ForeignKey(
                        name: "fk_categories_categories_category_id",
                        column: x => x.category_id,
                        principalSchema: "public",
                        principalTable: "categories",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "fk_categories_categories_parent_id",
                        column: x => x.parent_id,
                        principalSchema: "public",
                        principalTable: "categories",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "products",
                schema: "public",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    sku = table.Column<string>(type: "text", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    description = table.Column<string>(type: "text", nullable: false),
                    price = table.Column<decimal>(type: "numeric", nullable: false),
                    stock = table.Column<int>(type: "integer", nullable: false),
                    rating = table.Column<int>(type: "integer", nullable: false),
                    low_stock_threshold = table.Column<int>(type: "integer", nullable: false),
                    category_id = table.Column<Guid>(type: "uuid", nullable: false),
                    brand_id = table.Column<Guid>(type: "uuid", nullable: false),
                    brand_id1 = table.Column<Guid>(type: "uuid", nullable: true),
                    category_id1 = table.Column<Guid>(type: "uuid", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    created_by = table.Column<Guid>(type: "uuid", nullable: false),
                    modified_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    modified_by = table.Column<Guid>(type: "uuid", nullable: false),
                    is_active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_products", x => x.id);
                    table.ForeignKey(
                        name: "fk_products_brands_brand_id",
                        column: x => x.brand_id,
                        principalSchema: "public",
                        principalTable: "brands",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_products_brands_brand_id1",
                        column: x => x.brand_id1,
                        principalSchema: "public",
                        principalTable: "brands",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "fk_products_categories_category_id",
                        column: x => x.category_id,
                        principalSchema: "public",
                        principalTable: "categories",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_products_categories_category_id1",
                        column: x => x.category_id1,
                        principalSchema: "public",
                        principalTable: "categories",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "product_attributes",
                schema: "public",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    value = table.Column<string>(type: "text", nullable: false),
                    product_id = table.Column<Guid>(type: "uuid", nullable: false),
                    products_id = table.Column<Guid>(type: "uuid", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    created_by = table.Column<Guid>(type: "uuid", nullable: false),
                    modified_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    modified_by = table.Column<Guid>(type: "uuid", nullable: false),
                    is_active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_product_attributes", x => x.id);
                    table.ForeignKey(
                        name: "fk_product_attributes_products_product_id",
                        column: x => x.product_id,
                        principalSchema: "public",
                        principalTable: "products",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_product_attributes_products_products_id",
                        column: x => x.products_id,
                        principalSchema: "public",
                        principalTable: "products",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "product_images",
                schema: "public",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    image_url = table.Column<string>(type: "text", nullable: false),
                    product_id = table.Column<Guid>(type: "uuid", nullable: false),
                    products_id = table.Column<Guid>(type: "uuid", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    created_by = table.Column<Guid>(type: "uuid", nullable: false),
                    modified_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    modified_by = table.Column<Guid>(type: "uuid", nullable: false),
                    is_active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_product_images", x => x.id);
                    table.ForeignKey(
                        name: "fk_product_images_products_product_id",
                        column: x => x.product_id,
                        principalSchema: "public",
                        principalTable: "products",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_product_images_products_products_id",
                        column: x => x.products_id,
                        principalSchema: "public",
                        principalTable: "products",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "ix_categories_category_id",
                schema: "public",
                table: "categories",
                column: "category_id");

            migrationBuilder.CreateIndex(
                name: "ix_categories_parent_id",
                schema: "public",
                table: "categories",
                column: "parent_id");

            migrationBuilder.CreateIndex(
                name: "ix_product_attributes_product_id",
                schema: "public",
                table: "product_attributes",
                column: "product_id");

            migrationBuilder.CreateIndex(
                name: "ix_product_attributes_products_id",
                schema: "public",
                table: "product_attributes",
                column: "products_id");

            migrationBuilder.CreateIndex(
                name: "ix_product_images_product_id",
                schema: "public",
                table: "product_images",
                column: "product_id");

            migrationBuilder.CreateIndex(
                name: "ix_product_images_products_id",
                schema: "public",
                table: "product_images",
                column: "products_id");

            migrationBuilder.CreateIndex(
                name: "ix_products_brand_id",
                schema: "public",
                table: "products",
                column: "brand_id");

            migrationBuilder.CreateIndex(
                name: "ix_products_brand_id1",
                schema: "public",
                table: "products",
                column: "brand_id1");

            migrationBuilder.CreateIndex(
                name: "ix_products_category_id",
                schema: "public",
                table: "products",
                column: "category_id");

            migrationBuilder.CreateIndex(
                name: "ix_products_category_id1",
                schema: "public",
                table: "products",
                column: "category_id1");

            migrationBuilder.CreateIndex(
                name: "ix_products_sku",
                schema: "public",
                table: "products",
                column: "sku",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "product_attributes",
                schema: "public");

            migrationBuilder.DropTable(
                name: "product_images",
                schema: "public");

            migrationBuilder.DropTable(
                name: "products",
                schema: "public");

            migrationBuilder.DropTable(
                name: "brands",
                schema: "public");

            migrationBuilder.DropTable(
                name: "categories",
                schema: "public");
        }
    }
}
