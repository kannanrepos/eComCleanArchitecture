using Serilog;
using System.Reflection;
using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;

using Product.Application;
using Product.Infrastructure;
using Product.Persistence;
using Product.Service.Extensions;
using Product.Service;
using Scalar.AspNetCore;
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);
builder.Host.UseSerilog((context, loggerConfig) => loggerConfig.ReadFrom.Configuration(context.Configuration));
builder.Services.AddOpenApi();
builder.Services
    .AddPersistence(builder.Configuration)
    .AddInfrastructure(builder.Configuration)
    .AddApplication()
    .AddPresentation(builder.Configuration);

builder.Services.AddEndpoints(Assembly.GetExecutingAssembly());

var app = builder.Build();
app.MapEndpoints();
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUI(option =>
    {
        option.SwaggerEndpoint("/openapi/v1.json", "Product Service");
    });
    app.MapScalarApiReference(options =>
    {
        options
        .WithTitle("Product Service")
        .WithTheme(ScalarTheme.Purple)
        .WithDefaultHttpClient(ScalarTarget.CSharp, ScalarClient.RestSharp)
        ;

    });
    app.ApplyMigrations();
}
app.MapHealthChecks("health", new HealthCheckOptions
{
    ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
});

app.UseRequestContextLogging();

app.UseSerilogRequestLogging();
app.UseExceptionHandler();
app.UseCors(MyAllowSpecificOrigins);
await app.RunAsync();

// REMARK: Required for functional and integration tests to work.
namespace product.service
{
    public partial class Program;
}
