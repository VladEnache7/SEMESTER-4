using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfessionalProfile_Web.Models
{
    public class BussinesCard
    {
        public int bcId { get; set;}
        public int userId { get; set; }
        public string summary { get; set; }
        public string uniqueUrl { get; set; }
        
        //Navigation properties
        public User User { get; set; }
        public ICollection<Skill> keySkills { get; set; }
    }
}
