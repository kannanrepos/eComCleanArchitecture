using System.Linq.Expressions;
using Ecom.Shared.Models;

namespace Ecom.Shared.Interfaces;

public interface IRepository<T> where T : IBaseEntity
{
  Task<IEnumerable<T>> GetAllAsync(CancellationToken cancellationToken);
  Task<T?> GetByIdAsync(Guid id, CancellationToken cancellationToken);
  Task<T> AddAsync(T entity, CancellationToken cancellationToken);
  Task AddRangeAsync(IEnumerable<T> entities, CancellationToken cancellationToken);
  Task UpdateAsync(T entity, CancellationToken cancellationToken);
  Task DeleteAsync(Guid id, CancellationToken cancellationToken);
  Task DeleteRangeAsync(IEnumerable<T> entities, CancellationToken cancellationToken);
  Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> expression, CancellationToken cancellationToken);
  Task<PaginationResult> GetAllWithPagination(SortingAndPagingInfo paginationModel, string baseUrl, CancellationToken cancellationToken);

}
