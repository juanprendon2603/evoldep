import React from 'react';
import './styles.css';
import FirebaseTextLoader from "../components/FirebaseTextLoader.jsx";
import FirebaseInitializer from "../newData/FirebaseInitializer";






const InicioPage = () => {
  return (
    <>
      <FirebaseInitializer document="inicio" client:only="react"/>
      <header>
        <div className="hero">
          <div className="hero-text">
          <h1> <FirebaseTextLoader typeText="titulo" client:only="react" /></h1>
            <p><FirebaseTextLoader typeText="subtitulo" client:only="react" /></p>
          </div>
        </div>
      </header>
      <main>
        <section id="fortalezas">
          <h2><FirebaseTextLoader typeText="fortalezas" client:only="react" /></h2>
          <div className="strengths">
            <div className="strength">
              <div className="icon">
                <img src="/images/innovacion.png" alt="Innovación" />
              </div>
              <h3><FirebaseTextLoader typeText="innovacion" client:only="react" /></h3>
              <p><FirebaseTextLoader typeText="innovacionP" client:only="react" /></p>
            </div>
            <div className="strength">
              <div className="icon">
                <img src="/images/flexibilidad.png" alt="Flexibilidad" />
              </div>
              <h3><FirebaseTextLoader typeText="flexibilidad" client:only="react" /></h3>
              <p><FirebaseTextLoader typeText="flexibilidadP" client:only="react" /></p>
            </div>
            <div className="strength">
              <div className="icon">
                <img src="/images/calidad.png" alt="Compromiso con calidad" />
              </div>
              <h3><FirebaseTextLoader typeText="calidad" client:only="react" /></h3>
              <p><FirebaseTextLoader typeText="calidadP" client:only="react" /></p>
            </div>
            <div className="strength">
              <div className="icon">
                <img src="/images/recurso-humano.png" alt="Recurso Humano" />
              </div>
              <h3><FirebaseTextLoader typeText="recurso" client:only="react" /></h3>
              <p><FirebaseTextLoader typeText="recursoP" client:only="react" /></p>
            </div>
          </div>
        </section>
        <section id="eventos">
          <h2><FirebaseTextLoader typeText="eventos" client:only="react" /></h2>
          <div className="events">
            <div className="event">
              <h3><FirebaseTextLoader typeText="curso1" client:only="react" /></h3>
              <p><FirebaseTextLoader typeText="curso1P" client:only="react" /></p>
            </div>
            <div className="event">
              <h3><FirebaseTextLoader typeText="curso2" client:only="react" /></h3>
              <p><FirebaseTextLoader typeText="curso2P" client:only="react" /></p>
            </div>
            <div className="event">
              <h3><FirebaseTextLoader typeText="entrenamientos" client:only="react" /></h3>
              <p><FirebaseTextLoader typeText="entrenamientosP" client:only="react" /></p>
            </div>
          </div>
        </section>
      </main>
    </>
    
  );
};

export default InicioPage;
