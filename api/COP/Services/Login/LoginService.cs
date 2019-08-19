using COP.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COP.Services.Login
{
    public class LoginService : ILoginService
    {
        private readonly Context _ticketSystemDbContext;

        public LoginService(Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public User Authentication(string email, string password)
        {
            return _ticketSystemDbContext.Users.SingleOrDefault(user => user.Email == email && user.Password == password);
        }
    }
}
