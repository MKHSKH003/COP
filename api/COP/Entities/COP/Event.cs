using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COP.Entities
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Avatar { get; set; }
        public string Description { get; set; }
        public string EventDate { get; set; }
        public string AddedDate { get; set; }
        public int OrganisationId { get; set; }

        public Organisation organisation { get; set; }
    }
}
