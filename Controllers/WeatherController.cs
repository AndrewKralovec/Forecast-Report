using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;

namespace BlueWolf.Controllers
{
    public class WeatherController : Controller
    {
        private static async Task SendRequest()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(" https://api.forecast.io/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                // HTTP GET
                HttpResponseMessage response = await client.GetAsync("forecast/6032920e453a7d19ea39cf5f0c03c120/37.8267,-122.423");
                if (response.IsSuccessStatusCode)
                {
                    var product = await response.Content.ReadAsStringAsync();
                    Console.WriteLine("{0}", product);
                }
            }
        }
    }
}
