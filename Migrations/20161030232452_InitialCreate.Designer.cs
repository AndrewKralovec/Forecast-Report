using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using SkyCast.Data;

namespace ForecastReport.Migrations
{
    [DbContext(typeof(ForecastContext))]
    [Migration("20161030232452_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431");

            modelBuilder.Entity("SkyCast.Models.Forecast.History", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Input");

                    b.Property<DateTime>("SearchDate");

                    b.HasKey("ID");

                    b.ToTable("SearchHistory");
                });

            modelBuilder.Entity("SkyCast.Models.Forecast.Report", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("HistoryID");

                    b.Property<string>("UserID");

                    b.Property<int?>("WeatherID");

                    b.HasKey("ID");

                    b.HasIndex("HistoryID");

                    b.HasIndex("WeatherID");

                    b.ToTable("Report");
                });

            modelBuilder.Entity("SkyCast.Models.Forecast.Weather", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Input");

                    b.Property<DateTime>("SearchDate");

                    b.HasKey("ID");

                    b.ToTable("Weather");
                });

            modelBuilder.Entity("SkyCast.Models.Forecast.Report", b =>
                {
                    b.HasOne("SkyCast.Models.Forecast.History", "History")
                        .WithMany("Reports")
                        .HasForeignKey("HistoryID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SkyCast.Models.Forecast.Weather", "Weather")
                        .WithMany("Reports")
                        .HasForeignKey("WeatherID");
                });
        }
    }
}
