namespace WebApplication2.Models
{
    public class Log
    {
        public int Id { get; set; }
        public DateOnly Date { get; set; }
        public int UserId { get; set; }
        public string Text { get; set; }
    }
}
