using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SkyCast.Models.Forecast;
using SkyCast.Models.Account;

namespace SkyCast.Data
{
    public class ForecastContext : DbContext {
        public ForecastContext(DbContextOptions<ForecastContext> options) : base(options) {
        }
        public DbSet<History> SearchHistory { get; set; }
        public DbSet<Report> Reports { get; set; }
        public DbSet<Weather> WeatherReport { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<History>().ToTable("SearchHistory");
            modelBuilder.Entity<Report>().ToTable("Report");
            modelBuilder.Entity<Weather>().ToTable("Weather");
        }
        
    }
}

