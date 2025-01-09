using System.Threading.RateLimiting;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRateLimiter(options =>
{
    options.GlobalLimiter = PartitionedRateLimiter.Create<HttpContext, string>(httpContext =>
    RateLimitPartition.GetFixedWindowLimiter(
        partitionKey: httpContext.User.Identity?.Name ?? httpContext.Request.Headers.Host.ToString(),
        factory: partition => new FixedWindowRateLimiterOptions
        {
            AutoReplenishment = true,
            PermitLimit = 10,
            QueueLimit = 0,
            Window = TimeSpan.FromMinutes(1)
        }));
});
builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));
// Add other necessary services like SignalR
builder.Services.AddSignalR();

var app = builder.Build();
app.UseRateLimiter();
app.MapReverseProxy();
await app.RunAsync();

namespace Yarp.Gateway
{
    public partial class Program;
}
