dotnet sln add (ls -r **/*.csproj)
pnpm create next-app ecom-web
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button

dotnet tool install --global dotnet-ef
dotnet ef migrations add "InitialCreate" --verbose -s Product.Service/Product.Service.csproj -p lib/Product.Persistence/Product.Persistence.csproj

dotnet ef migrations add "InitialCreate"  --verbose -p lib/Product.Persistence/Product.Persistence.csproj -s Product.Service/Product.Service.csproj -o Data/Migrations

dotnet ef database update --verbose -p lib/Product.Persistence/Product.Persistence.csproj  -s Product.Service/Product.Service.csproj
CREATE DATABASE Ecom_Product_DB
 "ConnectionStrings": {
    "Database": "Host=postgres;Port=5432;Database=clean-architecture;Username=postgres;Password=postgres;Include Error Detail=true"
  },