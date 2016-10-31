using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Hosting;
using SkyCast.Models; 
namespace SkyCast.Controllers
{
    [Route("api/[controller]")]
    public class ForecastController : Controller{
        public AppKeyConfig AppConfigs { get; }
        private readonly string forecastUrl ;
        // Load forecast api key 
        public ForecastController(IOptions<AppKeyConfig> appkeys){
            AppConfigs = appkeys.Value;
            forecastUrl = "https://api.forecast.io/"; 
        }
        // Get Forecast information from forecast.io 
        [HttpPost("[action]")]
        public async Task<IActionResult> CurrentForecasts([FromBody] Location location){
            try{
                string date = null ; 
                if(location.date != null)
                    date = $",{location.date}";
                using (var client = new HttpClient()){
                    client.BaseAddress = new Uri(forecastUrl);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    // HTTP get forcast api result
                    HttpResponseMessage response = await client.GetAsync($"forecast/{AppConfigs.ForecastAPIKey}/{location.ToString()}{date}");
                    if (response.IsSuccessStatusCode){
                        var forecast = await response.Content.ReadAsStringAsync();
                        return Content(forecast, "application/json");
                    }
                    return BadRequest(new { Message = "Unexpected Error"}); 
                }
            } catch (Exception) {
                return BadRequest(new { Message = "Unexpected Error"}); 
            }
        }
    }
}
