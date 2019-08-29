using COP.Entities;
using COP.Models;
using COP.Services.Organisation;
using Microsoft.AspNetCore.Mvc;

namespace COP.Controllers
{
    [Route("api/organisation")]
    [ApiController]
    public class OrganisationController : ControllerBase
    {
        private readonly IOrganisationService _organisationService;
        public OrganisationController(IOrganisationService organisationService)
        {
            _organisationService = organisationService;
        }

        [HttpPost]
        public ActionResult<Entities.Organisation> AddOrganisation(Models.Organisations organisation)
        {
            return _organisationService.AddOrganisation(organisation);
        }

    }
}
