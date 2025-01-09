using Ecom.Shared;
using Product.Domain.Entities;
using Product.Domain.Repositories;
using Product.Persistence.Data;

namespace Product.Persistence.Repositories;

public class CategoryRepository(ApplicationDbContext dbContext) : Repository<Category>(dbContext), ICategoryRepository
{
}
