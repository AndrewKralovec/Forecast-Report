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
using BlueWolf.Models; 

namespace BlueWolf.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IHostingEnvironment hostingEnvironment;
        private readonly string cs ;         
        public UserController(IHostingEnvironment hostingEnvironment)
        {
            this.hostingEnvironment = hostingEnvironment ; 
            cs = $"Data Source={hostingEnvironment.ContentRootPath}/DB/BlueWolf.db"; 
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
                            result = new User {
                                id = rdr.GetInt32(0),
                                email = rdr.GetString(1)
                            }; 
                        }
                    }                           
                }
                con.Close();   
            }
            return Json(result) ; 
        }
        [HttpPost("[action]")]
        public IActionResult getHistory([FromBody] User user)
        {
            List<History> result = new List<History>(); 
            using(SqliteConnection con = new SqliteConnection(cs))
            {
                con.Open();
                string stm = $"SELECT INPUT,DATE  FROM HISTORY WHERE ID='{user.id}' ORDER BY DATE DESC LIMIT 100";
                using (SqliteCommand cmd = new SqliteCommand(stm, con))
                {
                    using (SqliteDataReader rdr = cmd.ExecuteReader())
                    {
                        while (rdr.Read()) 
                        {
                            result.Add(new History { 
                                input = rdr.GetString(0), 
                                date = rdr.GetString(1)  
                            }); 
                        }
                    }                           
                }
                if(result != null)
                    return Json(result); 
                return BadRequest("User not found");                 
            }
        }
        [HttpPost("[action]")]
        public IActionResult saveHistory([FromBody] History history)
        {
            using(SqliteConnection con = new SqliteConnection(cs))
            {
                try
                {
                    con.Open();
                    using (SqliteCommand cmd = new SqliteCommand())
                    {
                        cmd.Connection = con ;
                        cmd.CommandText = "INSERT INTO HISTORY(ID, INPUT, DATE) VALUES(@id, @input, @date)";
                        cmd.Prepare();
                        
                        cmd.Parameters.AddWithValue("@id", history.id);
                        cmd.Parameters.AddWithValue("@input", history.input);
                        cmd.Parameters.AddWithValue("@date", history.date);
                        cmd.ExecuteNonQuery();
                    }
                    con.Close();   
                    return Json("Success");
                }
                catch (SqliteException ex)
                {
                    return Json(ex) ; 
                }
            }
        }
    }
}
