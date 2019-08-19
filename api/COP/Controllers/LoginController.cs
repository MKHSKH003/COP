using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using COP.Entities;
using COP.Services.Login;
using Microsoft.AspNetCore.Mvc;

namespace COP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;
        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpGet("authenticate-user")]
        public User Authentication([FromQuery] string username, [FromQuery] string password)
        {
            return _loginService.Authentication(username, password);
        }
    }
}
