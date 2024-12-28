using Microsoft.AspNetCore.Http;

namespace Product.Domain.Services;

public interface IFileService
{
  Task<string> GetFileAsync(string filePath, CancellationToken cancellationToken = default);
  Task<string> SaveFileAsync(IFormFile file, CancellationToken cancellationToken = default);
  Task<IEnumerable<string>> SaveFilesAsync(IEnumerable<IFormFile> files, CancellationToken cancellationToken = default);
}
