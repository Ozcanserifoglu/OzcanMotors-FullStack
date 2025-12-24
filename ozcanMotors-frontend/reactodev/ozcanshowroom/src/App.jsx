import { useState, useEffect } from 'react' 
import axios from 'axios' // axios ekledik 
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import ArabaListesi from './components/ArabaListesi'
import Footer from './components/Footer';
import Iletisim from './components/Iletisim';
import Hakkimizda from './components/Hakkimizda';
import ArabaDetay from './components/ArabaDetay';

function App() {
  const [sayfa, setSayfa] = useState('anasayfa');
  const [seciliKategori, setSeciliKategori] = useState('Hepsi');
  const [seciliAraba, setSeciliAraba] = useState(null); // Seçilen arabayı tutar
  const arabaSec = (araba) => {
    setSeciliAraba(araba); 
    setSayfa('detay');     
  };
  
  
  const [arabalar, setArabalar] = useState([]); 

  // --- ARABA VERİLERİNİ BACKEND'DEN ÇEKME (GET) ---
  useEffect(() => {
    // Backend portunu buraya yazdık (7112)
    axios.get('https://localhost:7112/api/Arabalar')
      .then(response => {
        setArabalar(response.data); // Gelen veriyi içeri bastık
        console.log("Arabalar yüklendi:", response.data);
      })
      .catch(error => {
        console.error("Backend'e bağlanırken hata oluştu:", error);
      });
  }, []); // [] sayfa açıldığında bir kere çalışmasını sağlar

  const kategoriSec = (kategori) => {
    setSeciliKategori(kategori);
    setSayfa('galeri');
  };

  // Filtreleme mantığı aynı, sadece backend verisiyle çalışacak
  const gosterilecekArabalar = seciliKategori === 'Hepsi' 
    ? arabalar 
    : arabalar.filter(araba => araba.kasaTipi === seciliKategori);

  return (
    <>
      <Navbar setSayfa={setSayfa} kategoriSec={kategoriSec} />

      <div className="main-container">
      {sayfa === 'anasayfa' && <Slider arabaSec={arabaSec} />}
        
        {sayfa === 'galeri' && (
          <ArabaListesi arabalar={gosterilecekArabalar} baslik={seciliKategori} arabaSec={arabaSec} />
        )}

        {sayfa === 'iletisim' && <Iletisim />}

        {sayfa === 'hakkimizda' && <Hakkimizda setSayfa={setSayfa} />}

        {sayfa === 'detay' && seciliAraba && (
  <ArabaDetay araba={seciliAraba} setSayfa={setSayfa} />
        )}
      </div>
      
      <Footer setSayfa={setSayfa} kategoriSec={kategoriSec} />
    </>
  )
}

export default App