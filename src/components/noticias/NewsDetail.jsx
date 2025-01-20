// NewsDetail.jsx
import React, { useState, useEffect } from 'react';
import { getDocument } from '../../services/firebaseService';

import './styles.css';


const NewsDetail = ({ id }) => {
    const [noticias, setNoticias] = useState([]);


    useEffect(() => {
      const fetchNoticias = async () => {
        try {
          const noticiasData = await getDocument('pagina', 'noticias');
          setNoticias(noticiasData.news);
        } catch (error) {
          console.error("Error fetching noticias: ", error);
        }
      };
  
      fetchNoticias();
    }, []);


    if (!noticias || noticias.length === 0) {
        return <div>Cargando...</div>;
      }

    const getNewsById = (id) => {
        return noticias.find((newsItem) => newsItem.id === id) || null;
      };


  const newsItem = getNewsById(id); 
  const relatedNews = noticias
  .filter((item) => item.id !== id)  
  .sort(() => Math.random() - 0.5)  
  .slice(0, 4); 


    

  return (
    <div className="container">
      <section className="news-detail">
        {newsItem ? (
          <>
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="news-image"
            />
            <div className="news-text">
              <h1>{newsItem.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
            </div>
          </>
        ) : (
          <div className="news-not-found">
            <h1>Noticia no encontrada</h1>
            <p>Lo sentimos, la noticia que buscas no está disponible.</p>
          </div>
        )}
      </section>

      <aside className="related-news">
        <h3>Más Noticias</h3>
        {relatedNews.map((item) => (
          <div key={item.id} className="related-news-item">
            <img src={item.image} alt={item.title} />
            <div className="related-news-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <a href={`/noticias/${item.id}`} className="btn">
                Leer Más
              </a>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default NewsDetail;
