using System;

namespace Ecom.Shared.Models;

public class PaginationResult
{
  public int TotalCount { get; set; }
  public int PageSize { get; set; }
  public int PageNumber { get; set; }
  public int TotalPages { get; set; }
  public bool HasPreviousPage { get; set; }
  public bool HasNextPage { get; set; }
  public string? PreviousPageLink { get; set; }
  public string? NextPageLink { get; set; }
  public object? Data { get; set; }
  public PaginationResult(int totalCount, int pageSize, int pageNumber, object data)
  {
    TotalCount = totalCount;
    PageSize = pageSize;
    PageNumber = pageNumber;
    TotalPages = (int)Math.Ceiling(totalCount / (double)pageSize);
    HasPreviousPage = pageNumber > 1;
    HasNextPage = pageNumber < TotalPages;
    Data = data;
  }
  public void SetLinks(string baseUrl)
  {
    if (HasPreviousPage)
    {
      PreviousPageLink = $"{baseUrl}?pageSize={PageSize}&pageNumber={PageNumber - 1}";
    }
    if (HasNextPage)
    {
      NextPageLink = $"{baseUrl}?pageSize={PageSize}&pageNumber={PageNumber + 1}";
    }
  }
}
