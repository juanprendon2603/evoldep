document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-toggle"),e=document.querySelector(".sidebar-menu"),s=document.querySelector(".menu-toggle-close"),n=document.body;t&&e&&(t.addEventListener("click",function(){e.classList.toggle("open"),n.classList.toggle("menu-open")}),document.addEventListener("click",function(c){const o=c.target;e.classList.contains("open")&&o instanceof Node&&!e.contains(o)&&!t.contains(o)&&(e.classList.remove("open"),n.classList.remove("menu-open"))}),s&&s.addEventListener("click",function(){e.classList.remove("open"),n.classList.remove("menu-open")}))});window.addEventListener("scroll",function(){const t=document.querySelector(".top-bar"),e=document.querySelector(".navbar");window.innerWidth>768?t&&e&&(window.scrollY>50?(t.style.transform="translateY(-100%)",e.style.top="0"):(t.style.transform="translateY(0)",e.style.top="30px")):e&&(e.style.top="0")});