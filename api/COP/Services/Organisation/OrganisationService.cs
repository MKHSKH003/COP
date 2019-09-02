using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using COP.Entities;

namespace COP.Services.Organisation
{
    public class OrganisationService : IOrganisationService
    {
        private readonly Context _copDbContext;

        public OrganisationService(Context copDbContext)
        {
            _copDbContext = copDbContext;
        }

        public IEnumerable<Entities.Organisation> Get()
        {
            return _copDbContext.Organisation;
        }

        public Entities.Organisation AddOrganisation(Models.Organisation organisation)
        {
            var dbNewOrganization = new Entities.Organisation()
            {
                Name = organisation.Name,
                Avatar = organisation.Avatar,
                Email = organisation.Email,
                SocialIssue = organisation.SocialIssue,
                Description = organisation.Description,
                Location = organisation.Location
            };

            _copDbContext.Add(dbNewOrganization);
            _copDbContext.SaveChanges();
        
            return dbNewOrganization;
        }
    }
}
