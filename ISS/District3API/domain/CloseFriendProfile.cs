using System.Text.Json.Serialization;

namespace District3API.domain;

public class CloseFriendProfile
{   
    public int Id { get; set; }
    public int UserId { get; set; }
    [JsonIgnore]
    public User? User { get; set; }
    public DateTime CloseFriendedDate { get; set; } 
    
}