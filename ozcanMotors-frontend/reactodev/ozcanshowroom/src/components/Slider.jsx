import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Slider = ({arabaSec}) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderArabalar, setSliderArabalar] = useState([]); // Arabaları tutacak state
  const [yukleniyor, setYukleniyor] = useState(true); // Veri gelene kadar bekletelim

  useEffect(() => {
    axios.get('https://localhost:7112/api/Arabalar')
      .then(response => {
        const tumArabalar = response.data;
        
        const karisikArabalar = tumArabalar.sort(() => 0.5 - Math.random());
        
        setSliderArabalar(karisikArabalar.slice(0, 5));
        setYukleniyor(false);
      })
      .catch(error => {
        console.error("Slider verisi çekilemedi:", error);
        setYukleniyor(false);
      });
  }, []);

  const sonrakiSlayt = () => {
    setSliderIndex((prev) => (prev + 1) % sliderArabalar.length);
  };

  const oncekiSlayt = () => {
    setSliderIndex((prev) => (prev - 1 + sliderArabalar.length) % sliderArabalar.length);
  };

  if (yukleniyor) return <div className="carousel">Yükleniyor...</div>;
  if (sliderArabalar.length === 0) return <div className="carousel">Henüz vitrinlik araç yok.</div>;

  // Şu anki aktif araba
  const aktifAraba = sliderArabalar[sliderIndex];

  return (
    <div className="carousel">
      <button className="slider-btn sol" onClick={oncekiSlayt}>❮</button>
      
      <div className="slide">
        <img src={aktifAraba.resimUrl} alt={aktifAraba.marka} />
        
        <div className="slide-yazi">
          <h2>{aktifAraba.marka} {aktifAraba.model}</h2>
          
          <p className="slider-detay">
            {aktifAraba.aciklama} <br />
            <strong>{aktifAraba.kasaTipi}</strong> | {aktifAraba.kilometre} KM
          </p>

          <button 
            className="btn btn-warning mt-3 fw-bold px-4"
            onClick={() => arabaSec(aktifAraba)}
          >
            İncele
          </button>

        </div>
      </div>

      <button className="slider-btn sag" onClick={sonrakiSlayt}>❯</button>
    </div>
  );
};

export default Slider;