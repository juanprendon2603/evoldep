import React, { useState, useEffect } from 'react';
import { getDocument } from '../../services/firebaseService';
import './styles.css';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const noticiasData = await getDocument('pagina', 'noticias');
        setNoticias(noticiasData);
      } catch (error) {
        console.error("Error fetching noticias: ", error);
      }
    };

    fetchNoticias();
  }, []);

  if (!noticias || noticias.length === 0) {
    return <div>Cargando...</div>;
  }

  const news = noticias?.news;

  const noticiaPrincipal = news.find(item => item.id === 'principal');

  const otrasNoticias = news
    .filter(item => item.id !== 'principal')
    .sort((a, b) => parseInt(b.id) - parseInt(a.id));  

  return (
    <>
      <main>
        <section>
          <h2>NOTICIAS</h2>
          <div className="news-container">
            {/* Primera noticia grande */}
            {noticiaPrincipal && (
              <div className="news-large">
                <img
                  src={noticiaPrincipal.image}
                  alt={noticiaPrincipal.title}
                />
                <div className="news-content">
                  <h3>{noticiaPrincipal.title}</h3>
                  <p>{noticiaPrincipal.description}</p>
                  <a href={`/noticias/${noticiaPrincipal.id}`} className="btn">Ver Más</a>
                </div>
              </div>
            )}

            {/* Otras noticias pequeñas */}
            <div className="news-row">
              {otrasNoticias.map((item, index) => (
                <div key={index} className="news-small">
                  <img src={item.image} alt={item.title} />
                  <div className="news-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={`/noticias/${item.id}`} className="btn">Ver Más</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Noticias;
