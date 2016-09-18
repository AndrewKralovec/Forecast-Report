using Xunit;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.Sqlite;
using Microsoft.Data.Sqlite.Utilities;
using BlueWolf.Models; 
using BlueWolf.Controllers; 

namespace BlueWolf.Test  
{
    public class DatacaseTests{
        public const string cs =  "Data Source= /home/andrew/workspace/CSharp/LinuxASP/AndrewKralovec/DB/BlueWolf.db"; 
        public User user = new User{
            id = 2, 
            email = "root@test.com",
            password = "linux" 
        }; 
        [Fact]
        public void findUserTest(){
            var result = new User(); 
            using(SqliteConnection con = new SqliteConnection(cs)){
                con.Open();
                string stm = $"SELECT * FROM USERS WHERE EMAIL='{user.email}' AND PASSWORD='{user.password}' LIMIT 1";
                using (SqliteCommand cmd = new SqliteCommand(stm, con)){
                    using (SqliteDataReader rdr = cmd.ExecuteReader()){
                        while (rdr.Read()) {
                            result = new User {
                                id = rdr.GetInt32(0),
                                email = rdr.GetString(1)
                            }; 
                        }
                    }                           
                }
                con.Close();   
            }
            Assert.True(result.Equals(user)); 
        }
        [Fact]
        public void findUserHistory(){
            List<History> result = new List<History>(); 
            using(SqliteConnection con = new SqliteConnection(cs)){
                con.Open();
                string stm = $"SELECT INPUT,DATE  FROM HISTORY WHERE ID='{user.id}' ORDER BY DATE DESC LIMIT 100";
                using (SqliteCommand cmd = new SqliteCommand(stm, con)){
                    using (SqliteDataReader rdr = cmd.ExecuteReader()){
                        while (rdr.Read()) {
                            result.Add(new History { 
                                input = rdr.GetString(0), 
                                date = rdr.GetString(1)  
                            }); 
                        }
                    }                           
                }
                Assert.NotNull(result);
                Assert.InRange(result.Count,0,100);
                Assert.NotEmpty(result);                  
            }
        }
        [Fact]
        public void saveUserHistory(){
            using(SqliteConnection con = new SqliteConnection(cs)){
                bool result = false ; 
                var history = new History {
                    id = 1,
                    input = "40.7127837,-74.0059413",
                    date = "1473155705572"
                }; 
                try{
                    con.Open();
                    using (SqliteCommand cmd = new SqliteCommand()){
                        cmd.Connection = con ;
                        cmd.CommandText = "INSERT INTO HISTORY(ID, INPUT, DATE) VALUES(@id, @input, @date)";
                        cmd.Prepare();
                        
                        cmd.Parameters.AddWithValue("@id", history.id);
                        cmd.Parameters.AddWithValue("@input", history.input);
                        cmd.Parameters.AddWithValue("@date", history.date);
                        cmd.ExecuteNonQuery();
                    }
                    con.Close(); 
                    result = true ;   
                }catch (SqliteException) {
                    result = false ; 
                }
                Assert.True(result); 
            }
        }
    }
}
