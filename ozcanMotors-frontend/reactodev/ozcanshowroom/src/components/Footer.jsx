import React from 'react';

const Footer = ({ setSayfa, kategoriSec }) => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row">
          
          {/*  Marka ve Slogan */}
          <div className="col-md-4 mb-4">
            <h3 className="footer-logo">Özcan Motors 🚗</h3>
            <p className="footer-text">
              Güven, konfor ve kalitenin tek adresi. 
              Hayallerinizdeki araca ulaşmak hiç bu kadar kolay olmamıştı.
            </p>
          </div>

          {/*  Hızlı Linkler */}
          <div className="col-md-4 mb-4">
            <h4 className="footer-baslik">Hızlı Erişim</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={() => setSayfa('anasayfa')}>Anasayfa</a></li>
              <li><a href="#" onClick={() => kategoriSec('Hepsi')}>Tüm Araçlar</a></li>
              <li><a href="#" onClick={() => setSayfa('hakkimizda')}>Hakkımızda</a></li>
              <li><a href="#" onClick={() => setSayfa('iletisim')}>İletişim</a></li>
            </ul>
          </div>

          {/* İletişim ve Sosyal Medya */}
          <div className="col-md-4 mb-4">
            <h4 className="footer-baslik">Bize Ulaşın</h4>
            <p className="footer-text">
              <i className="bi bi-geo-alt-fill me-2"></i> 
              Galericiler Sitesi, No: 58, Bursa
            </p>
            <p className="footer-text">
              <i className="bi bi-telephone-fill me-2"></i> 
              0532 123 45 67
            </p>
            <p className="footer-text">
              <i className="bi bi-envelope-fill me-2"></i> 
              info@ozcanmotors.com
            </p>

            
            <div className="social-icons mt-4">
              
              {/* Instagram İkonu */}
              <a href="https://www.instagram.com/ozcanverstappen/" target='_blank' className="social-btn text-decoration-none me-3 fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              
              {/* Twitter (X) İkonu */}
              <a href="https://x.com/almaseratiw" target='_blank' className="social-btn text-decoration-none me-3 fs-4">
                <i className="bi bi-twitter-x"></i>
              </a>
              
              {/* YouTube İkonu */}
              <a href="https://www.youtube.com/channel/UC1Aha9aLmlkIbBN-iAttBzw" target='_blank' className="social-btn text-decoration-none fs-4">
                <i className="bi bi-youtube"></i>
              </a>

            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Özcan Motors. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;