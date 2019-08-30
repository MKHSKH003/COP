using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COP.Services.Organisation
{
    public interface IOrganisationService
    {
        Entities.Organisation AddOrganisation(Models.Organisations organisation);
    }
}
