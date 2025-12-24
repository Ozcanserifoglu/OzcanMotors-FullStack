import React from 'react';

const Navbar = ({ setSayfa, kategoriSec }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        {/* LOGO KISMI */}
        <a className="navbar-brand fw-bold text-warning" href="#" onClick={() => setSayfa('anasayfa')}>
          Özcan Motors 🚗
        </a>

        {/* MOBİL İÇİN HAMBURGER MENÜ BUTONU */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÜ LİNKLERİ */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-3"> 
            
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => setSayfa('anasayfa')}>Anasayfa</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Araçlarımız
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={() => kategoriSec('Hepsi')}>Tüm Araçlar</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#" onClick={() => kategoriSec('Sedan')}>Sedan</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => kategoriSec('SUV')}>SUV</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => kategoriSec('Station Wagon')}>Station Wagon</a></li>
              </ul>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setSayfa('iletisim')}>İletişim</a>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setSayfa('hakkimizda')}>Hakkımızda</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;