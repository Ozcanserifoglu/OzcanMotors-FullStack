using Microsoft.EntityFrameworkCore;
using ozcanMotorsBackEnd.Models;
using ozcanMotorsBackEnd.Models;

namespace ozcanMotorsBackEnd.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Araba> Arabalar { get; set; }
    }
}