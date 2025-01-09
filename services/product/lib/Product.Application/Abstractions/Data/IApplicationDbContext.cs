using System;

namespace Product.Application.Abstractions.Data;

public interface IApplicationDbContext
{
  Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
