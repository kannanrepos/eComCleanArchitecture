# Stage 1: Build Stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Install required dependencies for native AOT compilation
RUN apt-get update && apt-get install -y \
    clang \
    zlib1g-dev

COPY ["Yarp.Gateway/Yarp.Gateway.csproj", "Yarp.Gateway/"]
RUN dotnet restore "Yarp.Gateway/Yarp.Gateway.csproj"

COPY . .
RUN dotnet build "Yarp.Gateway/Yarp.Gateway.csproj" -c Release -o /app/service/gateway/build

# Stage 2: Publish Stage
FROM build AS publish
RUN dotnet publish "Yarp.Gateway/Yarp.Gateway.csproj" -c Release -o /app/service/gateway/publish

# Stage 3: Runtime Stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app/service/gateway/
EXPOSE 8080
COPY --from=publish /app/service/gateway/publish .
ENTRYPOINT ["dotnet", "Yarp.Gateway.dll"]
