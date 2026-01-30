using Microsoft.EntityFrameworkCore;
using District3API.DataBaseContext;
using District3API.domain;
using District3API.RepoInterfaces;
using District3API.Repos;

namespace District3API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddDbContextFactory<DataContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));

            });
            builder.Services.AddScoped<IRepoInterface<Account>, AccountRepository>();
            builder.Services.AddScoped<IRepoInterface<BlockedProfile>, BlockedProfileRepository>();
            builder.Services.AddScoped<IRepoInterface<CloseFriendProfile>, CloseFriendsProfileRepository>();
            builder.Services.AddScoped<IRepoInterface<FancierProfile>,  FancierProfileRepository>();
            // TODO: I do not understand why this below is not working
            builder.Services.AddScoped<IRepoInterface<Group>, GroupRepository>();
            builder.Services.AddScoped<IRepoInterface<Highlight>, HighlightRepository>();
            builder.Services.AddScoped<IRepoInterface<Post>, PostRepository>();
            builder.Services.AddScoped<IRepoInterface<User>, UserRepository>();
            
            


            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}