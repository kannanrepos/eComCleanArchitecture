using System.Reflection;
using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Notification.Service.Contracts;
using Notification.Service.Extensions;
using Notification.Service.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services
       .AddOpenApi()
       .AddPresentation(builder.Configuration)
       .AddEndpoints(Assembly.GetExecutingAssembly());

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
       app.MapOpenApi();
       app.UseSwaggerUI(option =>
       {
              option.SwaggerEndpoint("/openapi/v1.json", "Notification Service");
       });
       // app.ApplyMigrations();
}
app.MapHealthChecks("health", new HealthCheckOptions
{
       ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
});
app.MapEndpoints();
app.UseCors(Constants.CORS_POLICY_NAME);
app.MapHub<NotificationHub>("/notificationHub");

await app.RunAsync();


