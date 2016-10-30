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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<History>().ToTable("SearchHistory");
        }
    }
}

