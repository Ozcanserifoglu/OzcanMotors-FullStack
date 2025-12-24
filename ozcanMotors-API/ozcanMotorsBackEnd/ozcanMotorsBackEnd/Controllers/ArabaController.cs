using Microsoft.AspNetCore.Mvc;
using ozcanMotorsBackEnd.Data;
using ozcanMotorsBackEnd.Models;

namespace ozcanMotorsBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArabalarController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ArabalarController(AppDbContext context)
        {
            _context = context;
        }

        // 1. Arabaları Listeleme (GET)
        [HttpGet]
        public IActionResult GetArabalar()
        {
            var arabalar = _context.Arabalar.ToList();
            return Ok(arabalar);
        }

        // 2. Yeni Araba Ekleme (POST)
        [HttpPost]
        public IActionResult ArabaEkle(Araba yeniAraba)
        {
            _context.Arabalar.Add(yeniAraba);
            _context.SaveChanges(); // Veritabanına kaydet
            return Ok(yeniAraba);
        }
    }
}