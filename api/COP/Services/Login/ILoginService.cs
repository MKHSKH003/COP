using COP.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COP.Services.Login
{
    public interface ILoginService
    {
        User Authentication(string username, string password);
    }
}
