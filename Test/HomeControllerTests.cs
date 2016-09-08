using Xunit;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using BlueWolf.Models; 
using BlueWolf.Controllers; 

namespace BlueWolf.Test  
{
    public class HomeControllerTests
    {
        [Fact]
        public void IndexReturnsView()
        {
            var controller = new HomeController();
            var result = controller.Index() as ViewResult;
            Assert.NotNull(result);
        }
    }
}