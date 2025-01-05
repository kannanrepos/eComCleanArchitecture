using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Notification.Service.Contracts;

namespace Notification.Service.Data.Repository;

public class Repository<T>(DbContext dbContext) : IRepository<T> where T : class
{
    public async Task<T> AddAsync(T entity, CancellationToken cancellationToken)
    {
        dbContext.Set<T>().Add(entity);
        await dbContext.SaveChangesAsync(cancellationToken);
        return entity;
    }
    public async Task DeleteAsync(string id, CancellationToken cancellationToken)
    {
        var entity = await GetByIdAsync(id, cancellationToken) ?? throw new Exception("Entity not found");
        dbContext.Set<T>().Remove(entity);
        await dbContext.SaveChangesAsync(cancellationToken);
    }
    public async Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> expression, CancellationToken cancellationToken)
    {
        return await dbContext.Set<T>().Where(expression).ToListAsync(cancellationToken);
    }
    public async Task<IEnumerable<T>> GetAllAsync(CancellationToken cancellationToken)
    {
        return await dbContext.Set<T>().ToListAsync(cancellationToken);
    }

    public async Task<PaginationResult> GetAllWithPagination(SortingAndPagingInfo paginationModel, string baseUrl, CancellationToken cancellationToken)
    {
        var defaultSortColumn = "CreatedAt";
        var query = dbContext.Set<T>().AsQueryable();
        query = paginationModel.SortOrder == SortEnum.Asc
                ? query.OrderBy(e => EF.Property<object>(e, paginationModel.SortColumnName ?? defaultSortColumn))
                : query.OrderByDescending(e => EF.Property<object>(e, paginationModel.SortColumnName ?? defaultSortColumn));
        var data = await query
            .Skip((paginationModel.PageNumber - 1) * paginationModel.PageSize)
            .Take(paginationModel.PageSize)
            .ToListAsync(cancellationToken);
        var totalCount = await dbContext.Set<T>().CountAsync(cancellationToken);
        var paginationResult = new PaginationResult(totalCount, paginationModel.PageSize, paginationModel.PageNumber, data);
        paginationResult.SetLinks(baseUrl);
        return paginationResult;
    }

    public async Task<T?> GetByIdAsync(string id, CancellationToken cancellationToken)
    {
        return await dbContext.Set<T>().FindAsync(new object[] { id }, cancellationToken);
    }
    public async Task UpdateAsync(T entity, CancellationToken cancellationToken)
    {
        dbContext.Set<T>().Update(entity);
        await dbContext.SaveChangesAsync(cancellationToken);
    }
}
