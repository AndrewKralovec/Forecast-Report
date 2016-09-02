using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BlueWolf.Models
{
    public class User
    {
        public string email { get; set; }
        public string password { get; set; }
    }
}
