using System.ComponentModel.DataAnnotations;

namespace Ecom.Shared.Models;
public class BaseEntity : IBaseEntity
{
  private readonly List<IDomainEvent> _domainEvents = [];

  [Key]
  public Guid Id { get; set; }
  public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
  public Guid CreatedBy { get; set; }
  public DateTime ModifiedAt { get; set; } = DateTime.UtcNow;
  public Guid ModifiedBy { get; set; }
  public bool IsActive { get; set; } = true;

  public List<IDomainEvent> DomainEvents => [.. _domainEvents];

  public void ClearDomainEvents()
  {
    _domainEvents.Clear();
  }

  public void Raise(IDomainEvent domainEvent)
  {
    _domainEvents.Add(domainEvent);
  }
}

