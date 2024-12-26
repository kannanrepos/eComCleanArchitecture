using Serilog;
using System.Reflection;
using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;

using Product.Application;
using Product.Infrastructure;
using Product.Persistence;
using Product.Service.Extensions;
using Product.Service;

var builder = WebApplication.CreateBuilder(args);
builder.Host.UseSerilog((context, loggerConfig) => loggerConfig.ReadFrom.Configuration(context.Configuration));
builder.Services.AddOpenApi();
builder.Services
    .AddPersistence(builder.Configuration)
    .AddInfrastructure(builder.Configuration)
    .AddApplication()
    .AddPresentation();

builder.Services.AddEndpoints(Assembly.GetExecutingAssembly());

var app = builder.Build();
app.MapEndpoints();
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.ApplyMigrations();
}
app.MapHealthChecks("health", new HealthCheckOptions
{
    ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
});

app.UseRequestContextLogging();

app.UseSerilogRequestLogging();
app.UseExceptionHandler();
app.MapControllers();

await app.RunAsync();

// REMARK: Required for functional and integration tests to work.
namespace Web.Api
{
    public partial class Program;
}
