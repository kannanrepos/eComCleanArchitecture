# Stage 1: Build Stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /notification-service

# Copy project files first for better layer caching
COPY ["notification/Notification.Service/Notification.Service.csproj", "notification/Notification.Service/"]

# Restore packages
RUN dotnet restore "notification/Notification.Service/Notification.Service.csproj"

# Copy the rest of the source code
COPY . .

# Build and publish
RUN dotnet publish "notification/Notification.Service/Notification.Service.csproj" \
    -c Release \
    -o /app/publish \
    /p:UseAppHost=false

# Stage 2: Runtime Stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
EXPOSE 8081
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Notification.Service.dll"]
