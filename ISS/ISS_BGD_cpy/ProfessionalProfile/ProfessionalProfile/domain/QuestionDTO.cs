using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfessionalProfile.Domain
{
    public class QuestionDTO
    {
        public string QuestionText { get; set; }
        public List<AnswerDTO> Answers { get; set; }
        public AnswerDTO CorrectAnswer { get; set; }

        
    }
}
