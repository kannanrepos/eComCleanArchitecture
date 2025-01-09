using AutoMapper;
using Notification.Service.Data.Entities;

namespace Notification.Service.Contracts;

public class MappingProfile : Profile
{
  public MappingProfile()
  {
    CreateMap<NotificationMessage, NotificationResponse>();
  }
}
