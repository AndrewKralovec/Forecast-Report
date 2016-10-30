using System;
using System.Collections.Generic;

namespace SkyCast.Models
{
    public class Location
    {
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date { get; set; }
        // Override tostring for readability 
        public override string ToString(){
            return $"{latitude},{longitude}"; 
        }
    }
}
