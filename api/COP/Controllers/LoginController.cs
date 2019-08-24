using COP.Entities;
using COP.Models;
using COP.Services.Login;
using Microsoft.AspNetCore.Mvc;

namespace COP.Controllers
{
    [Route("api/login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;
        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpGet("authenticate-user")]
        public ActionResult<User> Authentication([FromQuery] string username, [FromQuery] string password)
        {
            return _loginService.Authentication(username, password);
        }

        [HttpGet("user-signup")]
        public ActionResult<UserSignup> Signup([FromQuery] string name, [FromQuery] string email, [FromQuery] string password)
        {
            return _loginService.Signup(name, email, password);
        }
    }
}
