using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfessionalProfile.Domain
{
    public class AssessmentTest
    {
        public int assessmentTestId { get; set;}
        public string testName { get; set; }
        public int userId { get; set; }
        public string description { get; set; }
        public int skillid { get; set; }
        
        // Navigation properties
        public virtual User User { get; set; }
        public virtual Skill Skill { get; set; }
        public virtual AssessmentResult AssessmentResult { get; set; }

    }
}
