using System;
using System.Collections.Generic;

namespace BlueWolf.Models
{
    public class Location
    {
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date { get; set; }
        public string toString(){
            return $"{latitude},{longitude}"; 
        }
    }
}
