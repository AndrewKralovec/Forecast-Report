using Xunit;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SkyCast.Models; 
using SkyCast.Controllers; 

namespace SkyCast.Test  
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