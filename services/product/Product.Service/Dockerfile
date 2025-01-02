# Stage 1: Build Stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Install required dependencies for native AOT compilation
RUN apt-get update && apt-get install -y \
    clang \
    zlib1g-dev


COPY ["product/Product.Service/Product.Service.csproj", "product/Product.Service/"]
COPY ["product/lib/Product.Application/Product.Application.csproj", "product/Product.Application/"]
COPY ["product/lib/Product.Domain/Product.Domain.csproj", "product/Product.Domain/"]
COPY ["product/lib/Product.Infrastructure/Product.Infrastructure.csproj", "product/Product.Infrastructure/"]
COPY ["product/lib/Product.Persistence/Product.Persistence.csproj", "product/Product.Persistence/"]
COPY ["shared/Ecom.Shared/Ecom.Shared.csproj", "product/Ecom.Shared/"]

RUN dotnet restore "./product/Product.Service/Product.Service.csproj"

COPY . .
WORKDIR "/src/product/Product.Service"

# Stage 2: Publish Stage
FROM build AS publish
RUN dotnet publish "./Product.Service.csproj" -c Release -o /app/service/product/publish /p:UseAppHost=false

# Stage 3: Runtime Stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app/service/product/
EXPOSE 8081
COPY --from=publish /app/service/product/publish .
ENTRYPOINT ["dotnet", "Product.Service.dll"]
