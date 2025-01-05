using System.Linq.Expressions;
using Notification.Service.Contracts;

namespace Notification.Service.Data.Repository;

public interface IRepository<T> where T : class
{
  Task<IEnumerable<T>> GetAllAsync(CancellationToken cancellationToken);
  Task<T?> GetByIdAsync(string id, CancellationToken cancellationToken);
  Task<T> AddAsync(T entity, CancellationToken cancellationToken);
  Task UpdateAsync(T entity, CancellationToken cancellationToken);
  Task DeleteAsync(string id, CancellationToken cancellationToken);
  Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> expression, CancellationToken cancellationToken);
  Task<PaginationResult> GetAllWithPagination(SortingAndPagingInfo paginationModel, string baseUrl, CancellationToken cancellationToken);
}
