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

        public Entities.Organisation AddOrganisation(Models.Organisations organisation)
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
