using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfessionalProfile.Domain
{
    public class Endorsement
    {
        
        public int endorsementId { get; set; }
        public int endorserId { get; set; }
        public int recipientid { get; set; }
        public int skillId { get; set; }

       //navigation properties
        public virtual User Endorser { get; set; }
        public virtual User Recipient { get; set; }
    }
}
