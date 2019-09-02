using COP.Models.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace COP.Entities
{
    public partial class Context : DbContext
    {
        private readonly EnvironmentConfig _environmentConfig;

        public Context(DbContextOptions<Context> options, IOptions<EnvironmentConfig> environmentConfig) : base(options)
        {
            _environmentConfig = environmentConfig.Value;
        }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Organisation> Organisations { get; set; }
        public virtual DbSet<Subscription> Subscriptions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User", "ilXoGejTCZ");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Organisation>(entity =>
            {
                entity.ToTable("Organisation", "ilXoGejTCZ");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Avatar)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SocialIssue)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Subscription>(entity =>
            {
                entity.ToTable("Subscription", "ilXoGejTCZ");

                entity.HasIndex(e => e.OrganisationId)
                    .HasName("FK_Subscription_Organisation");

                entity.HasIndex(e => e.UserId)
                    .HasName("FK_Subscription_User");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.OrganisationId)
                    .HasColumnName("OrganisationID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.UserId)
                    .HasColumnName("UserID")
                    .HasColumnType("int(11)");
            });
        }
    }
}