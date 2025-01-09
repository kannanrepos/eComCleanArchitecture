using Ecom.Shared;
using Microsoft.EntityFrameworkCore;
using Product.Domain.Entities;
using Product.Domain.Repositories;
using Product.Persistence.Data;

namespace Product.Persistence.Repositories;

public class ProductRepository(ApplicationDbContext dbContext) : Repository<Products>(dbContext), IProductRepository
{
  public async Task<IEnumerable<Products>> GetLowStockProductAsync(CancellationToken cancellationToken = default)
  {
    return await dbContext.Products.Where(product => product.Stock <= product.LowStockThreshold).ToListAsync(cancellationToken);
  }

  public async Task<Products?> GetProductBySKUAsync(string sku, CancellationToken cancellationToken = default)
  {
    return await dbContext.Products.FirstOrDefaultAsync(product => product.SKU.Equals(sku, StringComparison.InvariantCultureIgnoreCase));
  }

  public async Task<IEnumerable<Products>> GetProductsByBrandAsync(Guid brandId, CancellationToken cancellationToken = default)
  {
    return await dbContext.Products.Where(product => product.BrandId ==brandId).ToListAsync(cancellationToken);
  }

  public async Task<IEnumerable<Products>> GetProductsByCategoryAsync(Guid categoryId, CancellationToken cancellationToken = default)
  {
    return await dbContext.Products.Where(product => product.CategoryId == categoryId).ToListAsync(cancellationToken);

  }

  public async Task<IEnumerable<Products>> GetProductsByDateAsync(DateTime date, CancellationToken cancellationToken = default)
  {
    return await dbContext.Products.Where(product => product.CreatedAt == date.Date).ToListAsync(cancellationToken);
  }

  public async Task<IEnumerable<Products>> GetProductsByPriceRangeAsync(decimal minPrice, decimal maxPrice, CancellationToken cancellationToken = default)
  {
    return await dbContext.Products.Where(product => product.Price >= minPrice && product.Price <= maxPrice).ToListAsync(cancellationToken);
  }

  public async Task<IEnumerable<Products>> GetProductsByRatingAsync(int rating, CancellationToken cancellationToken = default)
  {
    return await dbContext.Products.Where(product => product.Rating == rating).ToListAsync(cancellationToken);
  }

  public async Task<IEnumerable<Products>> GetProductsByStockAsync(int stock, CancellationToken cancellationToken = default)
  {
    return await dbContext.Products.Where(product => product.Stock == stock).ToListAsync(cancellationToken);
  }
}
