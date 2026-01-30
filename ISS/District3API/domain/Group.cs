
namespace District3API.domain
{
    public class Group 
    {
        public int Id { get; set; }
        public string? GroupName { get; set; }

        public List<User>? GroupMembers { get; set; }
    }
}
