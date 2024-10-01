import React from 'react';
import './Footer.css';
import { FaInstagramSquare, FaTwitterSquare, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer-social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare />
        </a>
        <a href="mailto:example@example.com">
          <FaEnvelope />
        </a>
      </div>
      <div className="footer-nav">
        <a href="#about">Acerca de</a>
        <a href="#contact">Contáctanos</a>
        <a href="#privacy">Política de Privacidad</a>
      </div>
      <p className="footer-disclaimer">
        <p>&copy; 2024 ITS. All rights reserved.</p>
        <p>Created by Manuel Caporaso</p>
        <p>DIPLOMATURA UNIVERSITARIA FULLSTACK ICARO</p>
      </p>
    </footer>
  );
}

export default Footer;
