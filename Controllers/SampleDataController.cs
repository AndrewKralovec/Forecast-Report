using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Hosting;
using BlueWolf.Models; 
namespace BlueWolf.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        public AppKeyConfig AppConfigs { get; }
        private readonly IHostingEnvironment hostingEnvironment;
        private string cs {get;set;}   
        public SampleDataController(IOptions<AppKeyConfig> appkeys)
        {
            AppConfigs = appkeys.Value;
        }
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
                else
                {
                    throw new HttpRequestException("Bad request"); 
                }
                
            }
        }
    }
}
