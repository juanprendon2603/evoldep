import{j as s}from"./jsx-runtime.EU_jUVUh.js";import{r as c}from"./index.P85FK12k.js";import{g as l}from"./firebaseService.Cua1MMyI.js";/* empty css               */import"./firebase.CpjwWxYd.js";const g=({id:a})=>{const[n,r]=c.useState([]);if(c.useEffect(()=>{(async()=>{try{const i=await l("pagina","noticias");r(i.news)}catch(i){console.error("Error fetching noticias: ",i)}})()},[]),!n||n.length===0)return s.jsx("div",{children:"Cargando..."});const t=(e=>n.find(i=>i.id===e)||null)(a),o=n.filter(e=>e.id!==a).sort(()=>Math.random()-.5).slice(0,4);return s.jsxs("div",{className:"container",children:[s.jsx("section",{className:"news-detail",children:t?s.jsxs(s.Fragment,{children:[s.jsx("img",{src:t.image,alt:t.title,className:"news-image"}),s.jsxs("div",{className:"news-text",children:[s.jsx("h1",{children:t.title}),s.jsx("div",{dangerouslySetInnerHTML:{__html:t.content}})]})]}):s.jsxs("div",{className:"news-not-found",children:[s.jsx("h1",{children:"Noticia no encontrada"}),s.jsx("p",{children:"Lo sentimos, la noticia que buscas no está disponible."})]})}),s.jsxs("aside",{className:"related-news",children:[s.jsx("h3",{children:"Más Noticias"}),o.map(e=>s.jsxs("div",{className:"related-news-item",children:[s.jsx("img",{src:e.image,alt:e.title}),s.jsxs("div",{className:"related-news-content",children:[s.jsx("h4",{children:e.title}),s.jsx("p",{children:e.description}),s.jsx("a",{href:`/noticias/${e.id}`,className:"btn",children:"Leer Más"})]})]},e.id))]})]})};export{g as default};
