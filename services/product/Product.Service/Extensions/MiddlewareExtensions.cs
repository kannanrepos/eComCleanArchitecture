using Product.Service.Middleware;

namespace Product.Service.Extensions;

public static class MiddlewareExtensions
{
  public static IApplicationBuilder UseRequestContextLogging(this IApplicationBuilder app)
  {
    app.UseMiddleware<RequestContextLoggingMiddleware>();

    return app;
  }
}
