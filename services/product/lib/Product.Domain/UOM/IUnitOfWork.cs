using Product.Domain.Repositories;

namespace Product.Domain.UOM;

public interface IUnitOfWork : IDisposable
{
  public IBrandRepository Brands { get; }
  public ICategoryRepository Categories { get; }
  public IProductAttributeRepository ProductAttributes { get; }
  public IProductImageRepository ProductImages { get; }
  public IProductRepository Products { get; }
  public Task<int> SaveChangesAsync(CancellationToken cancellationToken);

}
