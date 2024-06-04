using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfessionalProfile_Web.Models
{
    public class Education
    {
        public int educationId { get; set;}
        public int userId { get; set; }
        public string degree { get; set; }
        public string institution { get; set; }
        public string fieldOfStudy { get; set; }
        public DateTime graduationDate { get; set; }
        public double gPA;
        // Navigation properties
        public virtual User User { get; set; }
    }
}
