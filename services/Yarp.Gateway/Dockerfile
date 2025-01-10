# Stage 1: Build Stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Install required dependencies for native AOT compilation
RUN apt-get update && apt-get install -y \
    clang \
    zlib1g-dev
WORKDIR /src
COPY ["Yarp.Gateway/Yarp.Gateway.csproj", "Yarp.Gateway/"]
RUN dotnet restore "./Yarp.Gateway/Yarp.Gateway.csproj"

COPY . .

WORKDIR /src/Yarp.Gateway
# Stage 2: Publish Stage
FROM build AS publish
RUN dotnet publish "./Yarp.Gateway.csproj" \
    -c Release \
    -o /app/publish \
    /p:UseAppHost=false

# Stage 3: Runtime Stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
EXPOSE 8080
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Yarp.Gateway.dll"]
