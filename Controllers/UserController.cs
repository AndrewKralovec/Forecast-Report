using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.Data.Sqlite;
using Microsoft.Data.Sqlite.Utilities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using SkyCast.Models; 

namespace SkyCast.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller{ 
        public UserController(){
        }
        [HttpPost("[action]")]
        public IActionResult getHistory([FromBody] User user){
                return BadRequest("User not found");                 
        }
        [HttpPost("[action]")]
        public IActionResult saveHistory() {
            return BadRequest(); 
        }
    }
}
