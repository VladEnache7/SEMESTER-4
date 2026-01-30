using System.Text.Json.Serialization;


namespace District3API.domain
{
    public class User
    {
        public int Id { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Email { get; set; }
        public string? ConfirmationPassword { get; set; }
        public DateTime RegistrationDate { get; set; }
        public int FollowingCount { get; set; }
        public int FollowersCount { get; set; }
        [JsonIgnore]
        public TimeSpan UserSession { get; set; }
        public int GroupId { get; set; }
        public Group? Group { get; set; }
    }
}
