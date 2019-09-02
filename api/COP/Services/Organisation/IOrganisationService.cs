using System.Collections.Generic;

namespace COP.Services.Organisation
{
    public interface IOrganisationService
    {
        Entities.Organisation AddOrganisation(Models.Organisation organisation);
        IEnumerable<Entities.Organisation> Get();
        Entities.Subscription AddSubscription(Entities.Subscription subscription);
    }
}
