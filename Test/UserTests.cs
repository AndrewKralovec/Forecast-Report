using Xunit;
using System;
using System.Collections.Generic;
using BlueWolf.Models; 
using BlueWolf.Controllers; 

namespace BlueWolf.Test  
{
        public class UserTests{
            [Fact]
            public void equalTest(){
                User u1 = new User{
                    id = 2, 
                    email = "root@test.com",
                    password = "linux" 
                };
                User u2 = new User{
                    id = 0, 
                    email = "root@test.com",
                    password = "linux" 
                };    
                Assert.True(u1.Equals(u2)); 
            }
            public void equalTestFail(){
                User u1 = new User{
                    id = 2, 
                    email = "root@test.com",
                    password = "linux" 
                };
                User u2 = new User{
                    id = 2, 
                    email = "random@email.com",
                    password = "root" 
                };    
                Assert.True(u1.Equals(u2)); 
            }
            
        }
}