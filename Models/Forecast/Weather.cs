using System;
using System.Collections.Generic;

namespace SkyCast.Models.Forecast
{
    public class Weather
    {
        public int ID { get; set; }
        public string Input { get; set; }
        public DateTime SearchDate { get; set; }
        public ICollection<Report> Reports { get; set; }

    }
}