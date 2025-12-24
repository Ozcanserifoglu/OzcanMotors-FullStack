import React from 'react';


const ArabaListesi = ({ arabalar, baslik, arabaSec }) => {
  return (
    <div>
      <h2 className="sayfa-baslik">{baslik} Modellerimiz</h2>
      <div className="galeri">
        {arabalar.length > 0 ? (
          arabalar.map((araba) => (
            <div key={araba.id} className="kart">
              <div className="etiket">{araba.kasaTipi}</div>
              
              <img src={araba.resimUrl} alt={araba.marka} />
              
              <div className="bilgi">
                <h3>{araba.marka} {araba.model}</h3>
                <p>Yıl: {araba.yil} | {araba.yakitTipi} | {araba.vitesTipi}</p>
                
                <span className="fiyat">
                  {araba.fiyat.toLocaleString('tr-TR')} TL
                </span>
                
                <button onClick={() => arabaSec(araba)}>İncele</button>

              </div>
            </div>
          ))
        ) : (
          <p style={{textAlign: 'center', width: '100%'}}>
            Bu kategoride araç bulunamadı veya Backend kapalı olabilir babuş...
          </p>
        )}
      </div>
    </div>
  );
};

export default ArabaListesi;