import React from 'react';

const ArabaDetay = ({ araba, setSayfa }) => {
  return (
    <div className="container my-5">
      {/* Geri Dön Butonu */}
      <button 
        className="btn btn-outline-dark mb-4" 
        onClick={() => setSayfa('galeri')}
      >
        ← Listeye Dön
      </button>

      <div className="row">
        {/* SOL TARAF: Büyük Resim */}
        <div className="col-md-7">
          <img 
            src={araba.resimUrl} 
            alt={araba.marka} 
            className="img-fluid rounded shadow"
            style={{ width: '100%', objectFit: 'cover', maxHeight: '500px' }}
          />
          
          {/* Açıklama Kutusu */}
          <div className="card mt-4 shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title">Araç Hakkında</h4>
              <p className="card-text text-muted">{araba.aciklama}</p>
            </div>
          </div>
        </div>

        {/* SAĞ TARAF: Özellikler Tablosu */}
        <div className="col-md-5">
          <div className="card shadow border-0">
            <div className="card-header bg-dark text-white">
              <h3 className="mb-0">{araba.marka} {araba.model}</h3>
            </div>
            <div className="card-body p-0">
              <table className="table table-striped mb-0">
                <tbody>
                  <tr>
                    <th scope="row" className="ps-4 py-3">Fiyat</th>
                    <td className="fw-bold text-danger fs-4">{araba.fiyat.toLocaleString('tr-TR')} TL</td>
                  </tr>
                  <tr>
                    <th scope="row" className="ps-4">Yıl</th>
                    <td>{araba.yil}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="ps-4">Kilometre</th>
                    <td>{araba.kilometre} KM</td>
                  </tr>
                  <tr>
                    <th scope="row" className="ps-4">Kasa Tipi</th>
                    <td>{araba.kasaTipi}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="ps-4">Yakıt Tipi</th>
                    <td>{araba.yakitTipi}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="ps-4">Vites</th>
                    <td>{araba.vitesTipi}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="ps-4">Renk</th>
                    <td>{araba.renk}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer bg-white p-3">
              <button className="btn btn-success w-100 py-2 fs-5">
                📞 Satıcıyı Ara
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArabaDetay;