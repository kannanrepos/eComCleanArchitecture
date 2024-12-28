FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER app
WORKDIR /app
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /gateway
COPY ["gateway/Yarp.Gateway/Yarp.Gateway.csproj", "gateway/Yarp.Gateway/"]

RUN dotnet restore "./gateway/Yarp.Gateway/Yarp.Gateway.csproj"

COPY . .
WORKDIR "/gateway/gateway/Yarp.Gateway"

RUN dotnet build "./Yarp.Gateway.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Yarp.Gateway.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Yarp.Gateway.dll"]

