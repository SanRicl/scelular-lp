import { MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import './header.css';
// import { MenuOutlined } from '@material-ui/icons';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.headerContainer');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  return (
    <div className="headerContainer">
      <div className="headerInfos">
        <div className="logo">
          <a href="#main">SCelular</a>
        </div>
        <div className="headerNavContainer" id={showLinks ? 'hidden' : ''}>
          <a href="#main" onClick={() => setShowLinks(false)}>
            Inicio
          </a>
          <a href="#about" onClick={() => setShowLinks(false)}>
            Sobre
          </a>
          <a href="#services" onClick={() => setShowLinks(false)}>
            Nossos Servicos
          </a>
          <a href="#localization" onClick={() => setShowLinks(false)}>
            Localização
          </a>
          <a href="#contact" onClick={() => setShowLinks(false)}>
            Contato
          </a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)} className="menuBtn">
          {' '}
          <MenuOutlined className="btnIcon" />{' '}
        </button>
      </div>
    </div>
  );
};

export default Header;
