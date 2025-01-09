using Microsoft.AspNetCore.Http;
using Product.Domain.Services;

namespace Product.Infrastructure.Services.Files;

public class FileService : IFileService
{
  private readonly string basePath = Path.Combine("public", "products", "images");

  public async Task<string> GetFileAsync(string filePath, CancellationToken cancellationToken = default)
  {
    var fileFullPath = Path.Combine(Directory.GetCurrentDirectory(), basePath, filePath);
    if (!File.Exists(fileFullPath))
    {
      return string.Empty;
    }
    var fileContent = await File.ReadAllBytesAsync(fileFullPath, cancellationToken);
    return Convert.ToBase64String(fileContent);
  }
  public async Task<string> SaveFileAsync(IFormFile file, CancellationToken cancellationToken = default)
  {
    var uploadDirectory = Path.Combine(Directory.GetCurrentDirectory(), basePath);

    try
    {
      if (file == null || file.Length == 0) return string.Empty;
      // Ensure the directory exists
      if (!Directory.Exists(uploadDirectory))
      {
        Directory.CreateDirectory(uploadDirectory);
      }
      // Generate a unique file name to avoid overwriting existing files
      var fileName = Guid.NewGuid().ToString("N") + Path.GetExtension(file.FileName);
      var filePath = Path.Combine(uploadDirectory, fileName);
      using (var fileStream = new FileStream(filePath, FileMode.Create))
      {
        await file.CopyToAsync(fileStream, cancellationToken);
      }

      return fileName;  // You can return the file path or a URL depending on your requirement
    }
    catch (Exception ex)
    {
      throw new Exception(ex.Message);
    }
  }

  public async Task<IEnumerable<string>> SaveFilesAsync(IEnumerable<IFormFile> files, CancellationToken cancellationToken = default)
  {
    var filePaths = new List<string>();

    foreach (var file in files)
    {
      var filePath = await SaveFileAsync(file, cancellationToken);
      filePaths.Add(filePath);
    }

    return filePaths;
  }
}
