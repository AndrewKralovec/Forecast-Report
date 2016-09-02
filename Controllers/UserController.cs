using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Microsoft.Data.Sqlite.Utilities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using BlueWolf.Models; 

namespace BlueWolf.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IHostingEnvironment hostingEnvironment;
        private string cs {get;set;}        
        public UserController(IHostingEnvironment hostingEnvironment)
        {
            this.hostingEnvironment = hostingEnvironment ; 
            this.cs = $"Data Source={hostingEnvironment.ContentRootPath}/DB/BlueWolf.db"; 
        }
        [HttpPost("[action]")]
        public IActionResult find([FromBody] User user)
        {
            User result = new User();
            using(SqliteConnection con = new SqliteConnection(cs))
            {
                con.Open();
                string stm = $"SELECT * FROM USERS WHERE EMAIL='{user.email}' AND PASSWORD='{user.password}' LIMIT 1";
                using (SqliteCommand cmd = new SqliteCommand(stm, con))
                {
                    using (SqliteDataReader rdr = cmd.ExecuteReader())
                    {
                        while (rdr.Read()) 
                        {
                            result = new User
                            {
                                id = rdr.GetInt32(0),
                                email = rdr.GetString(1),
                                password  = rdr.GetString(2)
                            }; 
                        }
                    }                           
                }
                con.Close();   
            }
            return Json(result) ; 
        }
        public IActionResult searchHistory([FromBody] User user)
        {
            List<string> result = new List<string>(); 
            List<int> test = new List<int>(); 
            using(SqliteConnection con = new SqliteConnection(cs))
            {
                con.Open();
                string stm = $"SELECT INPUT FROM HISTORY WHERE ID='{user.id}' LIMIT 100";
                using (SqliteCommand cmd = new SqliteCommand(stm, con))
                {
                    using (SqliteDataReader rdr = cmd.ExecuteReader())
                    {
                        while (rdr.Read()) 
                        {
                            result.Add(rdr.GetString(0)); 
                            test.Add(rdr.GetInt32(1)); 
                        }
                    }                           
                }
                return Json(result); 
            }
        }
    }
}
