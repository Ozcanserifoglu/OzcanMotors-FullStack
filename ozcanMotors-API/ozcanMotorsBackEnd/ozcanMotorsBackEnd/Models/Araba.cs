namespace ozcanMotorsBackEnd.Models
{
    public class Araba
    {
        public int Id { get; set; }

        // Temel Bilgiler
        public string Marka { get; set; } = string.Empty; // Örn: BMW
        public string Model { get; set; } = string.Empty; // Örn: 3.20i
        public int Yil { get; set; }      // Örn: 2023
        public decimal Fiyat { get; set; } // Örn: 1500000

        // Senin Hard-Code Yaptığın Özellikler (Artık Sütun Oldular)
        public string VitesTipi { get; set; } = string.Empty; // Örn: Otomatik, Manuel
        public string YakitTipi { get; set; } = string.Empty; // Örn: Benzin, Dizel, Hibrit
        public string KasaTipi { get; set; } = string.Empty;  // Örn: Sedan, SUV, Hatchback
        public string Renk { get; set; } = string.Empty;      // Örn: Siyah, Beyaz

        // Ekstra Lazım Olur
        public int Kilometre { get; set; }
        public string ResimUrl { get; set; } = string.Empty; // Arabanın fotosunun linki
        public string Aciklama { get; set; } = string.Empty; // "Doktordan temiz" vs.
    }
}