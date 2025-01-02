

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

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
