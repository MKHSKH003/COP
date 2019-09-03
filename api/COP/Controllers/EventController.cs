using COP.Entities;
using COP.Services.Organisation;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace COP.Controllers
{
    [Route("api/event")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IEventService _eventService;
        public EventController(IEventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet]
        public IEnumerable<Event> Get()
        {
            return _eventService.Get();
        }

        [HttpPost("add-event")]
        public ActionResult<Event> AddEvent(Models.Event @event)
        {
            return _eventService.AddEvent(@event);
        }
    }
}
