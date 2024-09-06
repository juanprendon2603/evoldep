// src/data/news.js
export const news = [
  {
    id: "1",
    title: "Transmisiones en vivo de partidos en YouTube",
    description: "¡No te pierdas los partidos del Club Evolución Deportiva transmitidos en vivo por nuestro canal de YouTube!",
    image: "/images/noticias/youtube.png",
    content: `
      📺 ¡Estamos emocionados de anunciar que podrás seguir los partidos de nuestro club en vivo a través de nuestro canal de YouTube!
      ⚽️ Acompaña a nuestros equipos en cada encuentro y no te pierdas ningún momento de la acción.
      🎥 ¡Suscríbete a nuestro canal y activa las notificaciones para no perderte nada!
      #PartidosEnVivo #Evoldep #ClubDeportivo #Futbol #SoyFelino #TransmisionesEnVivo
    `
  },
  {
    id: "2",
    title: "Graduación del entrenador Fernando Viafara",
    description: "Celebramos el logro de nuestro entrenador, Fernando Andrés Viafara, quien se ha graduado como Tecnólogo en Deporte.",
    image: "/images/noticias/grado.png",
    content: `
      ¡Tenemos un nuevo graduado en la casa tricolor! 🎓🧡🤍💙
      📚 Nuestro entrenador formador: Fernando Andrés Viafara Hurtado, ha alcanzado un hito importante: ¡se ha graduado como Tecnólogo en Deporte de la END! 🤩
      🌟 Su dedicación y pasión por el deporte son inspiración para todos nosotros.
      🏆 ¡Felicidades por este gran logro y gracias por guiar a nuestros atletas hacia el éxito!
      🎉 Resaltamos que en este momento se encuentra en la recta final en la misma institución universitaria para recibir el título de profesional en deporte. 🐯

      #TecnologoEndeporte #graduacion #Evoldep #Entrenador #OrgulloFloridano #SoyFelino #ClubDeportivo
    `
  },
  {
    id: "3",
    title: "Veedurías con Internacional F.C.",
    description: "Nuestros jugadores participaron en veedurías con el equipo profesional Internacional F.C. de Palmira.",
    image: "/images/noticias/veedurias.jpg",
    content: `
      ¡EVOLUCIÓN DEPORTIVA organizó veedurías con el equipo profesional Internacional F.C. de Palmira!
      ⚽️ Nuestros jugadores de las categorías sub 15, sub 14 y sub 13 participaron en estas importantes visorias con el scout Jorge Peralta. Se destacaron 6 jugadores que continuarán al siguiente filtro.
      🧡🤍💙 ¡Nos sentimos orgullosos y entusiasmados por este nuevo capítulo de nuestros deportistas! 💪

      #Veedurias #Evoldep #Futbol #Scout #SoyFelino #ClubDeportivo
    `
  },
  {
    id: "4",
    title: "Próximamente más noticias",
    description: "Mantente al tanto de las próximas noticias y actualizaciones del Club Evolución Deportiva.",
    image: "/images/noticias/proxi.png",
    content: `
      📢 ¡Próximamente más noticias y actualizaciones importantes!
      🧡🤍💙 Mantente al tanto de lo que sucede en nuestro club y no te pierdas las novedades.
      #Evoldep #Noticias #Próximamente #SoyFelino #ClubDeportivo
    `
  }
];

export function getNews() {
  return news;
}

export function getNewsById(id) {
  return news.find((item) => item.id === id) || null;
}
