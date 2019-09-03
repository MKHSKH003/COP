namespace COP.Models
{
    public partial class Event
    {
        public string Name { get; set; }
        public string Avatar { get; set; }
        public string Description { get; set; }
        public string EventDate { get; set; }
        public string AddedDate { get; set; }
        public int OrganisationId { get; set; }
    }
}
