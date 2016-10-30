using System;
using System.Collections.Generic;

namespace SkyCast.Models.Forecast
{
    public class Report
    {
        public int ID { get; set; }
        public string UserID { get; set; }
        public int HistoryID { get; set; }
        public int? WeatherID { get; set; }
        public History History { get; set; }
        public Weather Weather { get; set; }
    }
}