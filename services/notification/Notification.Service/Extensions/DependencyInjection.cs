
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;
using Notification.Service.Contracts;
using Notification.Service.Data;
using Notification.Service.Data.Repository;

namespace Notification.Service.Extensions;

public static class DependencyInjection
{
  public static IServiceCollection AddPresentation(this IServiceCollection services, IConfiguration configuration)
  {
    services
        .AddServices()
        .AddMappers()
        .AddValueAddedServices(configuration)
        .AddDatabase(configuration)
        .AddHealthChecks(configuration);
    return services;
  }

  private static IServiceCollection AddServices(this IServiceCollection services)
  {
    services.AddScoped<INotificationMessageRepository, NotificationMessageRepository>();
    return services;
  }
  private static IServiceCollection AddMappers(this IServiceCollection services)
  {
    services.AddAutoMapper(typeof(DependencyInjection).Assembly);
    return services;
  }
  private static IServiceCollection AddDatabase(this IServiceCollection services, IConfiguration configuration)
  {
    string? connectionString = configuration.GetConnectionString("Database");
    services.AddDbContext<ApplicationDbContext>(
        options => options
            .UseNpgsql(connectionString, npgsqlOptions =>
                npgsqlOptions.MigrationsHistoryTable(HistoryRepository.DefaultTableName, Schemas.Default)
                .MigrationsAssembly(typeof(DependencyInjection).Assembly.FullName))
            .UseSnakeCaseNamingConvention());
    return services;
  }

  private static IServiceCollection AddHealthChecks(this IServiceCollection services, IConfiguration configuration)
  {
    services
        .AddHealthChecks()
        .AddNpgSql(configuration.GetConnectionString("Database")!);

    return services;
  }
  private static IServiceCollection AddValueAddedServices(this IServiceCollection services, IConfiguration configuration)
  {
    services
       .AddCors(options =>
       {
         options.AddPolicy(Constants.CORS_POLICY_NAME,
             policy =>
             {
               policy.WithOrigins(configuration.GetValue<string>("AllowedOrigins")?.Split(',') ?? [])
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials();
             });
       })
       .AddSignalR();
    return services;
  }
}
