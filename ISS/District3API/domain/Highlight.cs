using System.Text.Json.Serialization;


namespace District3API.domain
{
    public class Highlight
    {
        public int HighlightId { get; set; }
        public int UserId { get; set; }
        [JsonIgnore]
        public User? User { get; set; }
        public List<int>? PostsIds { get; set; }
        public string? Name { get; set; }
        public string? CoverFilePath { get; set; }
    }
}
