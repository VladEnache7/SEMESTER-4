using District3API.domain;

namespace District3API.DataBaseContext;
using Microsoft.EntityFrameworkCore;

public class DataContext: DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }
    public DbSet<Account> Account { get; set; }
    public DbSet<BlockedProfile> BlockedProfile { get; set; }
    public DbSet<CloseFriendProfile> CloseFriendProfile { get; set; }
    public DbSet<FancierProfile>? FancierProfile { get; set; }
    public DbSet<Group> Group { get; set; }
    public DbSet<Highlight> Highlight { get; set; }
    public DbSet<Post> Post { get; set; }
    public DbSet<User> User { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>(account =>
        {
            account.HasKey(e => e.Id);
            account.HasOne(e => e.User)
                .WithOne()
                .HasForeignKey<Account>(e => e.UserId)
                .OnDelete(DeleteBehavior.Restrict);
        });
        modelBuilder.Entity<BlockedProfile>(blockedProfile =>
        {   
            blockedProfile.HasKey(e => e.Id);
            blockedProfile.HasOne(e => e.User)
                .WithOne()
                .HasForeignKey<BlockedProfile>(e => e.UserId)
                .OnDelete(DeleteBehavior.Restrict);
            
        });
        modelBuilder.Entity<CloseFriendProfile>(closeFriendProfile =>
        {
            closeFriendProfile.HasKey(e => e.Id);
            closeFriendProfile.HasOne(e => e.User)
                .WithOne()
                .HasForeignKey<CloseFriendProfile>(e => e.UserId)
                .OnDelete(DeleteBehavior.Restrict);
        });
        modelBuilder.Entity<FancierProfile>().HasKey(x => x.ProfileId);
        modelBuilder.Entity<Group>(group =>
        {
            group.HasKey(e => e.Id);
            
        });
        modelBuilder.Entity<Highlight>(highlight =>
        {
            highlight.HasKey(e => e.HighlightId);
            highlight.HasOne(e => e.User)
                .WithMany()
                .HasForeignKey(e => e.UserId);
        });
        modelBuilder.Entity<Post>().HasKey(x => x.Id);
        modelBuilder.Entity<User>(user =>
        {
            user.HasKey(e => e.Id);
            user.HasOne(e => e.Group)
                .WithMany(g => g.GroupMembers)
                .HasForeignKey(e => e.GroupId);
        });
    }
}
