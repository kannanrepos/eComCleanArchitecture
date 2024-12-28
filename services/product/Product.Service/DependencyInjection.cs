using System;
using Microsoft.AspNetCore.Http.Features;
using Product.Service.Infrastructure;

namespace Product.Service;

public static class DependencyInjection
{
  public static IServiceCollection AddPresentation(this IServiceCollection services)
  {

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
