using System;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using SkyCast.Models; 
using SkyCast.Models.Account; 
using SkyCast.Data; 

namespace SkyCast.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller{ 
        private readonly UserManager<ApplicationUser> userManager;
        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly ILogger logger;
        private readonly ForecastContext context;

        public UserController(
            ForecastContext context, 
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILoggerFactory logger
        ){
            this.context = context;
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.logger = logger.CreateLogger<UserController>();
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> getTest(){
            try {
                var user = await userManager.GetUserAsync(HttpContext.User);
                var history  = await context.Reports.Include(s => s.History)
                .ThenInclude(e => e.Input)
                .AsNoTracking()
                .SingleOrDefaultAsync(m => m.UserID == user.Id);
                if (user == null) {
                    return NotFound();
                }
                return Json(user); 
            } catch (Exception ex){
                logger.LogError("Login exception in Account Controller", ex); 
                return BadRequest("Unexpected Error"); 
            }
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
