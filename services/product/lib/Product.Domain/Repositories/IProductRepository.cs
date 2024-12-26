using Ecom.Shared.Interfaces;
using Product.Domain.Entities;

namespace Product.Domain.Repositories;

public interface IProductRepository : IRepository<Products>
{
  Task<Products?> GetProductBySKUAsync(string sku, CancellationToken cancellationToken = default);
  Task<IEnumerable<Products>> GetProductsByCategoryAsync(Guid categoryId, CancellationToken cancellationToken = default);
  Task<IEnumerable<Products>> GetProductsByBrandAsync(Guid brandId, CancellationToken cancellationToken = default);
  Task<IEnumerable<Products>> GetProductsByPriceRangeAsync(decimal minPrice, decimal maxPrice, CancellationToken cancellationToken = default);
  Task<IEnumerable<Products>> GetProductsByRatingAsync(int rating, CancellationToken cancellationToken = default);
  Task<IEnumerable<Products>> GetProductsByStockAsync(int stock, CancellationToken cancellationToken = default);
  Task<IEnumerable<Products>> GetLowStockProductAsync(CancellationToken cancellationToken = default);
  Task<IEnumerable<Products>> GetProductsByDateAsync(DateTime date, CancellationToken cancellationToken = default);


}
