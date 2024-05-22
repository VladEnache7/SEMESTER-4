using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfessionalProfile.Domain
{
    public class AssessmentResult
    {
        public int assesmentResultId { get; set; }
        public int assesmentTestId { get; set; }
        public int score { get; set; }
        public int userId { get; set; }
        public DateTime testDate { get; set; }
        
        //Navigation properties
        public AssessmentTest AssessmentTest { get; set; }
        public User User { get; set; }
    }
}
