using COP.Entities;
using COP.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace COP.Services.Login
{
    public class LoginService : ILoginService
    {
        private readonly Context _copDbContext;

        public LoginService(Context ticketSystemDbContext)
        {
            _copDbContext = ticketSystemDbContext;
        }

        public User Authentication(string email, string password)
        {
            return _copDbContext.Users.SingleOrDefault(user => user.Email == email && user.Password == password);
        }

        public UserSignup Signup(string name, string email, string password)
        {
            var users = _copDbContext.Users;
            var userSignup = new UserSignup();

            if (users.SingleOrDefault(u => u.Name == name) != null)
            {
                userSignup.message = "Name already exists!";
            }
            else if (users.SingleOrDefault(u => u.Email == email) != null)
            {
                userSignup.message = "Email already exists!";
            }
            else
            { 
                var dbNewUser = new User()
                {
                    Name = name,
                    Email = email,
                    Password = password
                };

                _copDbContext.Add(dbNewUser);
                _copDbContext.SaveChanges();

                userSignup.user = dbNewUser;
            }

            return userSignup;
        }


    }
}
