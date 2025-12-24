import React from 'react';

const Iletisim = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="display-4 fw-bold">Bize Ulaşın</h2>
        <p className="lead text-muted">Hayalindeki araca bir telefon kadar uzaksın.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-5">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body p-4">
              <h3 className="card-title mb-4">İletişim Bilgileri</h3>
              
              <div className="d-flex align-items-center mb-4">
                <div className="fs-2 me-3">📍</div>
                <div>
                  <h5 className="mb-0">Adres</h5>
                  <p className="mb-0 text-muted">Otocenter Galericiler Sitesi, İnegöl / Bursa</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="fs-2 me-3">📞</div>
                <div>
                  <h5 className="mb-0">Telefon</h5>
                  <p className="mb-0 text-muted">+90 555 123 45 67</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="fs-2 me-3">📧</div>
                <div>
                  <h5 className="mb-0">E-Posta</h5>
                  <p className="mb-0 text-muted">info@ozcanmotors.com</p>
                </div>
              </div>

              <hr />
              
              <h5 className="mb-3">Sosyal Medya</h5>
              <div className="d-flex gap-3">
                <button className="btn btn-outline-dark w-100">Instagram</button>
                <button className="btn btn-outline-success w-100">WhatsApp</button>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="col-md-7">
          <div className="card h-100 shadow-sm border-0 overflow-hidden">
            {}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48344.15699468652!2d29.47545625!3d40.07833355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c94d97a2428f59%3A0x86134b22306198a2!2zYTFkbGVnLCBCdXJzYQ!5e0!3m2!1str!2str!4v1703411111111!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{border:0, minHeight: '400px'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;