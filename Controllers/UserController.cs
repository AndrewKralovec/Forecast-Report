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
        private readonly IHostingEnvironment hostingEnvironment;
        private readonly string cs ; 
        // Set up the hostingEnvironment and connection string paths     
        public UserController(IHostingEnvironment hostingEnvironment){
            this.hostingEnvironment = hostingEnvironment ; 
            cs = $"Data Source={hostingEnvironment.ContentRootPath}/DB/SkyCast.db"; 
        }
        // Search the database for the uesr, if exists 
        [HttpPost("[action]")]
        public IActionResult find([FromBody] User user){
            User result = new User();
            using(SqliteConnection con = new SqliteConnection(cs)){
                con.Open();
                string stm = $"SELECT * FROM USERS WHERE EMAIL='{user.email}' AND PASSWORD='{user.password}' LIMIT 1";
                using (SqliteCommand cmd = new SqliteCommand(stm, con)){
                    using (SqliteDataReader rdr = cmd.ExecuteReader()){
                        while (rdr.Read()) {
                            result = new User {
                                id = rdr.GetInt32(0),
                                email = rdr.GetString(1)
                            }; 
                        }
                    }                           
                }
                con.Close();   
            }
            if(result.Equals(user))
                return Json(result); 
            return BadRequest("User not found");
        }
        // Get last 100 search history results of the given user from the  database 
        [HttpPost("[action]")]
        public IActionResult getHistory([FromBody] User user){
                return BadRequest("User not found");                 
        }
        // Insert search history in the database
        [HttpPost("[action]")]
        public IActionResult saveHistory() {
            return BadRequest(); 
        }
    }
}
