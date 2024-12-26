using System;

namespace Ecom.Shared.Models;

public class SortingAndPagingInfo
{
  public SortEnum SortOrder { get; set; }
  public string SortColumnName { get; set; } = string.Empty;
  public int PageSize { get; set; } = 10;
  public int PageNumber { get; set; } = 1;

}
