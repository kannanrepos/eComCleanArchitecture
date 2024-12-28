FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /product
COPY ["product/Product.Service/Product.Service.csproj", "product/Product.Service/"]
COPY ["product/lib/Product.Application/Product.Application.csproj", "product/Product.Application/"]
COPY ["product/lib/Product.Domain/Product.Domain.csproj", "product/Product.Domain/"]
COPY ["product/lib/Product.Infrastructure/Product.Infrastructure.csproj", "product/Product.Infrastructure/"]
COPY ["product/lib/Product.Persistence/Product.Persistence.csproj", "product/Product.Persistence/"]
COPY ["shared/Ecom.Shared/Ecom.Shared.csproj", "product/Ecom.Shared/"]

RUN dotnet restore "./product/Product.Service/Product.Service.csproj"

COPY . .
WORKDIR "/product/product/Product.Service"

RUN dotnet build "./Product.Service.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Product.Service.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Product.Service.dll"]

