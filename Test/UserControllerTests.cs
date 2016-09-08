using Xunit;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Hosting;
using BlueWolf.Models; 
using BlueWolf.Controllers; 

namespace BlueWolf.Test  
{
    public class UserControllerTests
    {
        private readonly IHostingEnvironment hostingEnvironment;
        public UserControllerTests(IHostingEnvironment hostingEnvironment){
            this.hostingEnvironment = hostingEnvironment ; 
        }
        [Fact]
        public void IndexReturnsView() {
            var controller = new UserController(hostingEnvironment);
            var user = new User{
                id = 2,
                email = "root@test.com",
                password = "linux"
            }; 
            var result = controller.find(user); 
            Assert.Equal(result,result);
        }
    }
}
