using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Product.Application.Abstractions.Data;
using Product.Domain.Repositories;
using Product.Persistence.Data;
using Product.Persistence.Repositories;

namespace Product.Persistence;

public static class DependencyInjection
{
  public static IServiceCollection AddPersistence(
          this IServiceCollection services,
          IConfiguration configuration) =>
          services
              .AddServices()
              .AddDatabase(configuration)
              .AddHealthChecks(configuration);
  private static IServiceCollection AddServices(this IServiceCollection services)
  {
    services.AddScoped<IBrandRepository, BrandRepository>();
    services.AddScoped<ICategoryRepository, CategoryRepository>();
    services.AddScoped<IProductAttributeRepository, ProductAttributeRepository>();
    services.AddScoped<IProductImageRepository, ProductImageRepository>();
    services.AddScoped<IProductRepository, ProductRepository>();

    return services;
  }
  private static IServiceCollection AddDatabase(this IServiceCollection services, IConfiguration configuration)
  {
    string? connectionString = configuration.GetConnectionString("Database");
    services.AddMediatR(config =>
    {
      config.RegisterServicesFromAssembly(typeof(DependencyInjection).Assembly);
    });
    services.AddDbContext<ApplicationDbContext>(
        options => options
            .UseNpgsql(connectionString, npgsqlOptions =>
                npgsqlOptions.MigrationsHistoryTable(HistoryRepository.DefaultTableName, Schemas.Default)
                .MigrationsAssembly(typeof(DependencyInjection).Assembly.FullName))
            .UseSnakeCaseNamingConvention());

    services.AddScoped<IApplicationDbContext>(sp => sp.GetRequiredService<ApplicationDbContext>()
    );

    return services;
  }

  private static IServiceCollection AddHealthChecks(this IServiceCollection services, IConfiguration configuration)
  {
    services
        .AddHealthChecks()
        .AddNpgSql(configuration.GetConnectionString("Database")!);

    return services;
  }
}
