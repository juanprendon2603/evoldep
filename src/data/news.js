// src/data/news.js
export const news = [
  {
    id: "1",
    title: "Título de la Noticia 1",
    description: "Descripción corta de la noticia 1.",
    image: "/images/image.png",
    content: "Contenido completo de la noticia 1...",
  },
  {
    id: "2",
    title: "Título de la Noticia 2",
    description: "Descripción corta de la noticia 2.",
    image: "/images/image.png",
    content: "Contenido completo de la noticia 2...",
  },
  {
    id: "3",
    title: "Título de la Noticia 2",
    description: "Descripción corta de la noticia 2.",
    image: "/images/image.png",
    content: "Contenido completo de la noticia 2...",
  },
  {
    id: "4",
    title: "Título de la Noticia 2",
    description: "Descripción corta de la noticia 2.",
    image: "/images/image.png",
    content: "Contenido completo de la noticia 2...",
  },
  {
    id: "5",
    title: "Título de la Noticia 2",
    description: "Descripción corta de la noticia 2.",
    image: "/images/image.png",
    content: "Contenido completo de la noticia 2...",
  },
  {
    id: "6",
    title: "Título de la Noticia 2",
    description: "Descripción corta de la noticia 2.",
    image: "/images/image.png",
    content: "Contenido completo de la noticia 2...",
  },
  {
    id: "7",
    title: "Título de la Noticia 2",
    description: "Descripción corta de la noticia 2.",
    image: "/images/image.png",
    content: "Contenido completo de la noticia 2...",
  },
  {
    id: "8",
    title: "Título de la Noticia 2",
    description: "Descripción corta de la noticia 2.",
    image: "/images/image.png",
    content: "Contenido completo de la noticia 2...",
  },
  {
    id: "9",
    title: "Título de la Noticia 2",
    description: "Descripción corta de la noticia 2.",
    image: "/images/image.png",
    content: "Contenido completo de la noticia 2...",
  },
  {
    id: "10",
    title: "Título de la Noticia 2",
    description: "Descripción corta de la noticia 2.",
    image: "/images/image.png",
    content: "Contenido completo de la noticia 2...",
  },
  {
    id: "11",
    title: "Título de la Noticia 2",
    description: "Descripción corta de la noticia 2.",
    image: "/images/image.png",
    content: "Contenido completo de la noticia 2...",
  },
  {
    id: "12",
    title: "Título de la Noticia ultima",
    description: "Descripción corta de la noticia 2.",
    image: "/images/image.png",
    content: "Contenido completo de la noticia 2...",
  },

  // Más noticias aquí
];

export function getNews() {
  return news;
}

export function getNewsById(id) {
  return news.find((item) => item.id === id) || null; // Retorna null si no se encuentra la noticia
}
