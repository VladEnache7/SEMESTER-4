using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ProfessionalProfile_Web.Models
{
    public class User
    {
        public int userId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string phone { get; set; }
        public string summary { get; set; }
        public DateTime dateOfBirth { get; set; }
        public bool darkTheme { get; set; }
        public string address { get; set; }
        public string websiteURL { get; set; }
        public string picture { get; set; }

        // Navigation property for one-to-one relationship
        [JsonIgnore]
        public Privacy? Privacy { get; set; }
        [JsonIgnore]
        public ICollection<Notification>? Notifications { get; set; }
        [JsonIgnore]
        public AssessmentResult? AssessmentResult { get; set; }
        [JsonIgnore]
        public Project? Project { get; set; }
        [JsonIgnore]
        public Volunteering? Volunteering { get; set; }
        [JsonIgnore]
        public WorkExperience? WorkExperience { get; set; }
    }
}
