import React from 'react'
import './Home.css'

export const Hero = () => {
  return (
    <section className="betty-hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <span className="badge-ecomoda">Certificado por el Cuartel</span>
        <h1>¡Se dice de mí... y de <span className="text-green">nuestra pasión!</span></h1>
        <p>
          Únete a la comunidad más grande de Ecomoda. Registra tus coleccionables, 
          accede a eventos exclusivos y revive la historia que cambió la televisión. 
          <strong> No seas una "peliteñida", ¡únete hoy!</strong>
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary">Entrar al Cuartel</button>
          <button className="btn-outline">Ver el Diario de Betty</button>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <strong>+10k</strong>
            <span>Miembros</span>
          </div>
          <div className="stat-item">
            <strong>335</strong>
            <span>Episodios</span>
          </div>
          <div className="stat-item">
            <strong>100%</strong>
            <span>Ecomoda</span>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        {/* Aquí iría una imagen moderna de Betty o una silueta icónica */}
        <div className="glass-card-betty">
           <div className="agenda-icon">📒</div>
           <p>"El amor no es como lo pintan..."</p>
        </div>
      </div>
    </section>
  )
}