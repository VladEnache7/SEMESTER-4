using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfessionalProfile.Domain
{
    public class AssessmentTestDTO
    {
        public string TestName { get; set; }
        public string Description { get; set; }
        public List<QuestionDTO> Questions { get; set; }
        public string SkillTested { get; set; }
    }
}
