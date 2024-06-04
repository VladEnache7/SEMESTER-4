using Microsoft.EntityFrameworkCore;
using ProfessionalProfile_Web.Models;

namespace ProfessionalProfile_Web.DatabaseContext
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<AssessmentResult> AssessmentResult { get; set; }
        public DbSet<BussinesCard> BussinesCard { get; set; }
        public DbSet<Certificate> Certificate { get; set; }
        public DbSet<Education> Education { get; set; }


        public DbSet<Question> Question { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<AssessmentTest> AssessmentTest { get; set; }
        public DbSet<Privacy> Privacy { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Skill> Skill { get; set; }
        public DbSet<Endorsement> Endorsement { get; set; }
        public DbSet<Notification> Notification { get; set; }

        public DbSet<Project> Project { get; set; }

        public DbSet<Volunteering> Volunteering { get; set; }
        public DbSet<WorkExperience> WorkExperience { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {


            modelBuilder.Entity<Endorsement>(Endorsement =>
            {
                Endorsement.HasKey(a => a.endorsementId);
                Endorsement.HasOne(a => a.Endorser)
                    .WithMany()
                    .HasForeignKey(a => a.endorserId)
                    .OnDelete(DeleteBehavior.Restrict);


                Endorsement.HasOne(a => a.Recipient)
                    .WithMany()
                    .HasForeignKey(a => a.recipientid)
                    .OnDelete(DeleteBehavior.Restrict);


            });

            modelBuilder.Entity<Privacy>().HasOne(a => a.User).WithOne(a => a.Privacy)
                .HasForeignKey<Privacy>(a => a.userId);
            modelBuilder.Entity<AssessmentTest>(AssessmentTest =>
            {
                AssessmentTest.HasKey(a => a.assessmentTestId);
                AssessmentTest.HasOne(a => a.User)
                    .WithMany()
                    .HasForeignKey(a => a.userId);
                AssessmentTest.HasOne(a => a.Skill)
                    .WithMany()
                    .HasForeignKey(a => a.skillid);
            });
            modelBuilder.Entity<Question>(Question =>
            {
                Question.HasKey(a => a.questionId);
                Question.HasOne(a => a.AssessmentTest)
                    .WithMany()
                    .HasForeignKey(a => a.assesmentTestId);
            });

            modelBuilder.Entity<Answer>(Answer =>
            {
                Answer.HasKey(a => a.answerId);
                Answer.HasOne(a => a.Question)
                    .WithMany()
                    .HasForeignKey(a => a.questionId);
            });
            modelBuilder.Entity<Education>(Education =>
            {

                Education.HasKey(a => a.educationId);
                Education.HasOne(a => a.User)
                    .WithMany()
                    .HasForeignKey(a => a.userId);
            });
            modelBuilder.Entity<Certificate>(Certificate =>
            {
                Certificate.HasKey(a => a.certificateId);
                Certificate.HasOne(a => a.User)
                    .WithMany()
                    .HasForeignKey(a => a.userId);
            });
            modelBuilder.Entity<BussinesCard>(BussinesCard => { BussinesCard.HasKey(a => a.bcId); });
            modelBuilder.Entity<AssessmentResult>(AssessmentResult =>
            {
                AssessmentResult.HasKey(a => a.assesmentResultId);
                AssessmentResult.HasOne(a => a.AssessmentTest)
                    .WithOne(a => a.AssessmentResult)
                    .HasForeignKey<AssessmentResult>(a => a.assesmentTestId).OnDelete(DeleteBehavior.NoAction);

                AssessmentResult.HasOne(a => a.User)
                    .WithOne(a => a.AssessmentResult).HasForeignKey<AssessmentResult>(a => a.userId)
                    .OnDelete(DeleteBehavior.NoAction);


            });
            modelBuilder.Entity<Project>(Project =>
            {
                Project.HasKey(a => a.projectId);
                Project.HasOne(a => a.User)
                    .WithOne(a => a.Project)
                    .HasForeignKey<Project>(b => b.userId);
            });

            modelBuilder.Entity<Volunteering>(Volunteering =>
            {
                Volunteering.HasKey(a => a.volunteeringId);
                Volunteering.HasOne(a => a.User)
                    .WithOne(a => a.Volunteering)
                    .HasForeignKey<Volunteering>(a => a.userId);
            });

            modelBuilder.Entity<WorkExperience>(WorkExperience =>
            {
                WorkExperience.HasKey(a => a.workId);
                WorkExperience.HasOne(a => a.User)
                    .WithOne(a => a.WorkExperience)
                    .HasForeignKey<WorkExperience>(a => a.userId);
            });
        }
    }
}