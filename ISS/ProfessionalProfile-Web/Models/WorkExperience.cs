using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfessionalProfile_Web.Models
{
    public class WorkExperience
    {
        public int workId { get; set; }
        public int userId { get; set; }
        public string jobTitle { get; set; }
        public string company { get; set; }
        public string location { get; set; }
        public string employmentPeriod { get; set; }
        public string responsibilities { get; set; }
        public string achievements { get; set; }
        public string description { get; set; }

        //Navigation properties
        public User User { get; set; }
        
    }
}
