

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Product.Domain.Services;
using Product.Infrastructure.Services.Files;

namespace Product.Infrastructure;

public static class DependencyInjection
{
  public static IServiceCollection AddInfrastructure(
         this IServiceCollection services,
         IConfiguration configuration)
  {
    services.AddScoped<IFileService, FileService>();
    return services;
  }

}
