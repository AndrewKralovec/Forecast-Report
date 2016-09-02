using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Microsoft.Data.Sqlite.Utilities;
using Microsoft.EntityFrameworkCore;
using BlueWolf.Models; 

namespace BlueWolf.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private string cs {get;set;}
        private string table {get;set;}
        public UserController()
        {
            this.cs = "Data Source=/home/andrew/Elearn.db"; 
        }
        [HttpPost]
        public IActionResult find(User un){
            var test = un; 
            string pwd = null; 
            int count=0; 
            using(SqliteConnection con = new SqliteConnection(cs))
            {
                con.Open();
                string stm = $"SELECT count(*) FROM Accounts WHERE USERNAME='{un}' AND PASSWORD='{pwd}'";
                if(pwd == null)
                {
                    stm = $"SELECT count(*) FROM Accounts WHERE USERNAME='{un}'";
                }
                using (SqliteCommand cmd = new SqliteCommand(stm, con))
                {
                    count = Convert.ToInt32(cmd.ExecuteScalar());
                }

                con.Close();   
            }
            return Json(new { x = count, y = false}) ; 
        }
    }
}
