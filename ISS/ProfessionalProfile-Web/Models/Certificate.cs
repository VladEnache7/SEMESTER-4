using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfessionalProfile_Web.Models
{
    public class Certificate
    {
        public int certificateId { get; set; }
        public string name { get; set; }
        public string issuedBy { get; set; }
        public string description { get; set; }
        public DateTime issuedDate { get; set; }
        public DateTime expirationDate { get; set; }
        public int userId { get; set; }

        // Navigation properties
        public virtual User User { get; set; }

       
    }
}
