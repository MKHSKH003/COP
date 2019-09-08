using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COP.Entities
{
    public class Organisation
    {
        public Organisation()
        {
            Subscriptions = new HashSet<Subscription>();
        }

        public int Id { get; set; }
        public string Avatar { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string SocialIssue { get; set; }
        public string Description { get; set; }
        public string Website { get; set; }
        public string Location { get; set; }

        public IEnumerable<Subscription> Subscriptions { get; set; }
    }
}
