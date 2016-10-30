using System;
using System.Collections.Generic;

namespace SkyCast.Models
{
    public class User
    {
        public int id { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        // Overide equal because id might not be set 
        public override bool Equals(System.Object obj){
            if (obj == null){
                return false;
            }
            User user = obj as User;
            if ((System.Object)user == null){
                return false;
            }
            // Return true if the fields match
            return (email == user.email) && (email == user.email);
        }
        public override int GetHashCode(){
            // Dont flag overflow
            unchecked {
                int hash = 17;
                hash = hash * 23 + id.GetHashCode();
                hash = hash * 23 + email.GetHashCode();
                hash = hash * 23 + password.GetHashCode();
                return hash;
            }
        } 
    }
}
