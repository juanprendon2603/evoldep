// src/data/news.js
export const news = [
    {
      id: '1',
      title: 'Título de la Noticia 1',
      description: 'Descripción corta de la noticia 1.',
      image: '/images/image.png',
      content: 'Contenido completo de la noticia 1...'
    },
    {
      id: '2',
      title: 'Título de la Noticia 2',
      description: 'Descripción corta de la noticia 2.',
      image: '/images/image.png',
      content: 'Contenido completo de la noticia 2...'
    },
    // Más noticias aquí
  ];
  
  export function getNews() {
    return news;
  }
  
  export function getNewsById(id) {
    return news.find(item => item.id === id) || null; // Retorna null si no se encuentra la noticia
  }
  