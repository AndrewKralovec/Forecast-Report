using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;

namespace BlueWolf.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };
        [HttpPost("[action]")]
        public async Task<IActionResult> CurrentForecasts(string location)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(" https://api.forecast.io/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                // HTTP GET
                HttpResponseMessage response = await client.GetAsync("forecast/6032920e453a7d19ea39cf5f0c03c120/"+location);
                if (response.IsSuccessStatusCode)
                {
                    var forecast = await response.Content.ReadAsStringAsync();
                    return Content(forecast, "application/json");
                }
            }
            return Json(new { forecast = false }); 
        }
    }
}
