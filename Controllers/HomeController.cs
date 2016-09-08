using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BlueWolf.Controllers
{
    public class HomeController : Controller{
        // Load the index 
        public IActionResult Index(){
            return View();
        }
        public IActionResult Error(){
            return View();
        }
    }
}
