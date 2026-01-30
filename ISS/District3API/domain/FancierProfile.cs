namespace District3API.domain;

public class FancierProfile
{
    public int ProfileId { get; set; }
    public List<string>? Links { get; set; }
    public string? DailyMotto { get; set; }
    public DateTime? RemoveMottoDate { get; set; }
    public int FrameNumber { get; set; }
    public string? Hashtag { get; set; }
}