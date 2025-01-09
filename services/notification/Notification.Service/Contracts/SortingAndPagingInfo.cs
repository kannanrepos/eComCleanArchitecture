using System;

namespace Notification.Service.Contracts;
public enum SortEnum
{
  Asc,
  Desc
}
public class SortingAndPagingInfo
{
  public SortEnum? SortOrder { get; set; } = SortEnum.Desc;
  public string? SortColumnName { get; set; }
  public int PageSize { get; set; } = 10;
  public int PageNumber { get; set; } = 1;

}
