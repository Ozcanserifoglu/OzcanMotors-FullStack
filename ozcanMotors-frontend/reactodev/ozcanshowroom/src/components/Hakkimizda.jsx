import React from 'react';


const Hakkimizda = ({setSayfa}) => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src="/ozcanmotors.jpg" 
            alt="Galeri Ofis" 
            className="img-fluid rounded shadow-lg"
            style={{ borderLeft: "5px solid #ffc107" }} 
          />
        </div>

        <div className="col-md-6">
          <h2 className="display-5 fw-bold mb-4">Özcan Motors <span className="text-warning">Güvencesi</span></h2>
          <p className="lead text-muted">
            2010 yılından beri Bursa İnegöl'de premium araç tutkunlarını hayallerindeki araçlarla buluşturuyoruz.
          </p>
          <p>
            Kurulduğumuz günden beri tek bir ilkemiz var: <strong>"Kendi binmeyeceğimiz aracı satmayız."</strong> 
            Stoklarımızdaki her araç, uzman ekspertiz ekibimiz tarafından detaylıca incelenir, kozmetik ve mekanik 
            olarak kusursuz hale getirildikten sonra vitrine çıkar.
          </p>
          
          <div className="row mt-4">
            <div className="col-6">
              <h4 className="fw-bold">500+</h4>
              <p className="text-muted small">Mutlu Müşteri</p>
            </div>
            <div className="col-6">
              <h4 className="fw-bold">15+</h4>
              <p className="text-muted small">Yıllık Tecrübe</p>
            </div>
          </div>

          <button 
            className="btn btn-dark mt-3"
            onClick={() => setSayfa('galeri')} 
            >
            Stoklarımızdaki Araçlar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hakkimizda;