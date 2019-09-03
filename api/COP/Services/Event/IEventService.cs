using System.Collections.Generic;

namespace COP.Services.Organisation
{
    public interface IEventService
    {
        Entities.Event AddEvent(Models.Event @event);
        IEnumerable<Entities.Event> Get();
    }
}
