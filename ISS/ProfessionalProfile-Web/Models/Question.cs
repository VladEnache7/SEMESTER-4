using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfessionalProfile_Web.Models
{
    public class Question
    {
        public int questionId { get; set; } 
        public string questionText { get; set; }
        public int assesmentTestId { get; set; }

        // Navigation properties
        public virtual AssessmentTest AssessmentTest { get; set; }
    }
}
