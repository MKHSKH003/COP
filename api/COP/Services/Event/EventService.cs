using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using COP.Entities;

namespace COP.Services.Organisation
{
    public class EventService : IEventService
    {
        private readonly Context _copDbContext;

        public EventService(Context copDbContext)
        {
            _copDbContext = copDbContext;
        }

        public IEnumerable<Event> Get()
        {
            return _copDbContext.Events
                .OrderByDescending(e => e.Id)
                .Include(e => e.organisation);
        }

        public Event AddEvent(Models.Event @event)
        {
            var dbNewEvent = new Event()
            {
                Name = @event.Name,
                Description = @event.Description,
                Avatar = @event.Avatar,
                EventDate = @event.EventDate,
                AddedDate = @event.AddedDate,
                OrganisationId = @event.OrganisationId
            };

            _copDbContext.Add(dbNewEvent);
            _copDbContext.SaveChanges();

            return _copDbContext.Events
                .Include(e => e.organisation)
                .SingleOrDefault(e => e.Id == dbNewEvent.Id);
                
        }
    }
}
