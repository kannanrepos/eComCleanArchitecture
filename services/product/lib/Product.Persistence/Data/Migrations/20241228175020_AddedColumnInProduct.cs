using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Product.Persistence.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddedColumnInProduct : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "product_images_url",
                schema: "public",
                table: "products_product_attributes",
                newName: "product_images_thump_images");

            migrationBuilder.RenameColumn(
                name: "product_images_url",
                schema: "public",
                table: "products",
                newName: "product_images_thump_images");

            migrationBuilder.RenameColumn(
                name: "product_icon_image_url",
                schema: "public",
                table: "products",
                newName: "product_images_product_images");

            migrationBuilder.RenameColumn(
                name: "product_images_url",
                schema: "public",
                table: "product_attribute",
                newName: "product_images_thump_images");

            migrationBuilder.AddColumn<List<string>>(
                name: "product_images_product_images",
                schema: "public",
                table: "products_product_attributes",
                type: "text[]",
                nullable: false);

            migrationBuilder.AddColumn<decimal>(
                name: "discount_percentage",
                schema: "public",
                table: "products",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "mrp",
                schema: "public",
                table: "products",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<List<string>>(
                name: "product_icon_image_product_images",
                schema: "public",
                table: "products",
                type: "text[]",
                nullable: false);

            migrationBuilder.AddColumn<List<string>>(
                name: "product_icon_image_thump_images",
                schema: "public",
                table: "products",
                type: "text[]",
                nullable: false);

            migrationBuilder.AddColumn<string>(
                name: "short_description",
                schema: "public",
                table: "products",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<List<string>>(
                name: "product_images_product_images",
                schema: "public",
                table: "product_attribute",
                type: "text[]",
                nullable: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "product_images_product_images",
                schema: "public",
                table: "products_product_attributes");

            migrationBuilder.DropColumn(
                name: "discount_percentage",
                schema: "public",
                table: "products");

            migrationBuilder.DropColumn(
                name: "mrp",
                schema: "public",
                table: "products");

            migrationBuilder.DropColumn(
                name: "product_icon_image_product_images",
                schema: "public",
                table: "products");

            migrationBuilder.DropColumn(
                name: "product_icon_image_thump_images",
                schema: "public",
                table: "products");

            migrationBuilder.DropColumn(
                name: "short_description",
                schema: "public",
                table: "products");

            migrationBuilder.DropColumn(
                name: "product_images_product_images",
                schema: "public",
                table: "product_attribute");

            migrationBuilder.RenameColumn(
                name: "product_images_thump_images",
                schema: "public",
                table: "products_product_attributes",
                newName: "product_images_url");

            migrationBuilder.RenameColumn(
                name: "product_images_thump_images",
                schema: "public",
                table: "products",
                newName: "product_images_url");

            migrationBuilder.RenameColumn(
                name: "product_images_product_images",
                schema: "public",
                table: "products",
                newName: "product_icon_image_url");

            migrationBuilder.RenameColumn(
                name: "product_images_thump_images",
                schema: "public",
                table: "product_attribute",
                newName: "product_images_url");
        }
    }
}
