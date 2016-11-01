using System;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using SkyCast.Models.Account; 
using SkyCast.Models.Forecast; 
using SkyCast.Models; 
using SkyCast.Data; 

namespace SkyCast.Controllers
{
    [Route("api/[controller]")]
    public class HistoryController : Controller{ 
        private readonly UserManager<ApplicationUser> userManager;
        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly ILogger logger;
        private readonly ForecastContext context;
        public HistoryController(
            ForecastContext context, 
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILoggerFactory logger
        ){
            this.context = context;
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.logger = logger.CreateLogger<HistoryController>();
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> getHistory(){
            try {
                var user = await userManager.GetUserAsync(HttpContext.User);
                var history = await context.SearchHistory.AsNoTracking()
                .Where(e => e.Reports.Any(r => r.UserID == user.Id))
                .Take(100)
                .ToListAsync();
                return Json(history); 
            } catch (Exception ex){
                logger.LogError("History exception in User Controller", ex); 
                return BadRequest("Unexpected Error"); 
            }
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> saveHistory([FromBody] Location location) {
            try {
                var user = await userManager.GetUserAsync(HttpContext.User); 
                var history = new History {
                    Input = location.ToString(), 
                    SearchDate = DateTime.Now
                }; 
                context.SearchHistory.Add(history);
                await context.SaveChangesAsync();
                var report = new Report {
                    UserID = user.Id,
                    HistoryID = history.ID
                }; 
                context.Reports.Add(report); 
                await context.SaveChangesAsync();
                return Json(new { Message = "Succecful "}); 
            } catch (Exception ex){
                logger.LogError("History exception in User Controller", ex); 
                return BadRequest("Unexpected Error"); 
            }
        }
    }
}
