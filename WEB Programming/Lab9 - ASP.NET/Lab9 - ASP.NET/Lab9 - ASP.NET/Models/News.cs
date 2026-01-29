using System;
namespace Lab9___ASP.NET.Models
{
    public class News
    {
        public int NewsId { get; set; }
        public string? NewsTitle { get; set; }
        public string? NewsProducer { get; set; }
        public string? NewsCategory { get; set; }
        public string? NewsContent { get; set; }
        public DateOnly? NewsDatePosted { get; set; }
    }
}

