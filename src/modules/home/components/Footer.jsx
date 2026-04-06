import React from 'react'
import './Home.css'

export const Footer = () => {
  return (
    <footer className="ecomoda-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="logo-text">ECO<span>MODA</span></h2>
          <p>La elegancia no es cuestión de belleza, es cuestión de estilo y registros perfectos.</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Secciones</h4>
            <ul>
              <li><a href="#cuartel">El Cuartel</a></li>
              <li><a href="#presidencia">Presidencia</a></li>
              <li><a href="#taller">El Taller</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#diario">Diario de Betty</a></li>
              <li><a href="#finanzas">6 Semestres de Finanzas</a></li>
              <li><a href="#chismes">Archivo de Chismes</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Únete al Club de Fans</h4>
          <p>Recibe las últimas noticias de la Terramoza.</p>
          <div className="input-group">
            <input type="email" placeholder="tu-correo@ecomoda.com" />
            <button>OK</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Ecomoda Fans System. "Se dice de mí..."</p>
        <div className="social-icons">
          <span>👓</span>
          <span>👠</span>
          <span>💼</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;