using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfessionalProfile_Web.Models
{
    public class Volunteering
    {
        public int volunteeringId { get; set; }
        public int userId { get; set; }
        public string organisation { get; set; }
        public string role { get; set; }
        public string description { get; set; }

       //Navigation properties
        public User User { get; set; }
    }
}
