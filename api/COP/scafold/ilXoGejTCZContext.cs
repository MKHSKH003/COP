using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace COP.scafold
{
    public partial class ilXoGejTCZContext : DbContext
    {
        public ilXoGejTCZContext()
        {
        }

        public ilXoGejTCZContext(DbContextOptions<ilXoGejTCZContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Subscription> Subscription { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=remotemysql.com;userid=ilXoGejTCZ;password=6Pmmr2VWrz;database=ilXoGejTCZ;SSL Mode=None;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Subscription>(entity =>
            {
                entity.ToTable("Subscription", "ilXoGejTCZ");

                entity.HasIndex(e => e.OrganizationId)
                    .HasName("FK_Subscription_Organisation");

                entity.HasIndex(e => e.UserId)
                    .HasName("FK_Subscription_User");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.OrganizationId)
                    .HasColumnName("OrganizationID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.UserId)
                    .HasColumnName("UserID")
                    .HasColumnType("int(11)");
            });
        }
    }
}
