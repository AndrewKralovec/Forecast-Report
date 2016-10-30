using System;
using System.Collections.Generic;

namespace SkyCast.Models.Forecast
{
    public class History
    {
        public int ID { get; set; }
        public string UserID { get; set; }
        public string Input { get; set; }
        public DateTime SearchDate { get; set; }
    }
}