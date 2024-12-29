using System;
using Microsoft.AspNetCore.Http.Features;
using Product.Service.Infrastructure;

namespace Product.Service;

public static class DependencyInjection
{
  public static IServiceCollection AddPresentation(this IServiceCollection services, IConfiguration configuration)
  {
    services.AddCors(options =>
    {
      options.AddPolicy(name: "_myAllowSpecificOrigins",
                      policy =>
                      {
                        policy.WithOrigins(configuration.GetValue<string>("AllowedOrigins")?.Split(',') ?? [])
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        ;
                      });
      // options.AddDefaultPolicy(builder =>
      // {
      //   builder.WithOrigins(configuration.GetValue<string>("AllowedOrigins")?.Split(',') ?? [])
      //          .AllowAnyHeader()
      //          .AllowAnyMethod();
      // });
    });
    services.AddEndpointsApiExplorer();
    // REMARK: If you want to use Controllers, you'll need this.
    // services.AddControllers();

    services.AddExceptionHandler<GlobalExceptionHandler>();
    services.AddProblemDetails();
    // Increase the max file size if needed (e.g., 100MB).
    services.Configure<FormOptions>(options =>
    {
      options.MultipartBodyLengthLimit = 104857600; // 100 MB
    });
    return services;
  }
}
