# Stage 1: Build Stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy project files first for better layer caching
COPY ["product/Product.Service/Product.Service.csproj", "product/Product.Service/"]
COPY ["product/lib/Product.Application/Product.Application.csproj", "product/lib/Product.Application/"]
COPY ["product/lib/Product.Domain/Product.Domain.csproj", "product/lib/Product.Domain/"]
COPY ["product/lib/Product.Infrastructure/Product.Infrastructure.csproj", "product/lib/Product.Infrastructure/"]
COPY ["product/lib/Product.Persistence/Product.Persistence.csproj", "product/lib/Product.Persistence/"]
COPY ["shared/Ecom.Shared/Ecom.Shared.csproj", "shared/Ecom.Shared/"]

# Restore packages
RUN dotnet restore "product/Product.Service/Product.Service.csproj"

# Copy the rest of the source code
COPY . .

# Build and publish
RUN dotnet publish "product/Product.Service/Product.Service.csproj" \
    -c Release \
    -o /app/publish \
    /p:UseAppHost=false

# Stage 2: Runtime Stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
EXPOSE 8081
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Product.Service.dll"]
