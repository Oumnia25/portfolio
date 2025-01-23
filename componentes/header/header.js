export function header() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./styles/header.css";
  document.head.appendChild(link)

  const header = document.createElement("header");

  const section1 = document.createElement("section");
   section1.classList = "section1";
  const p = document.createElement("p");
  p.textContent = "Oumnia Echatbi";
  section1.appendChild(p);
  header.appendChild(section1);


  const section2 = document.createElement("section");
  section2.classList = "section2";
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");


  const sections = [
    { id: "sobremimenu", name: "Sobre mi" },
    { id: "habilidadesmenu", name: "Habilidades" },
    { id: "estudios-experienciamenu", name: "Estudios/Experiencia" },
    { id: "proyectosmenu", name: "Proyectos" },
    { id: "contactomenu", name: "Contacto" }
  ];
  
  sections.forEach(section => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = section.name;
    a.href = `#${section.id}`;
    li.appendChild(a);
    ul.appendChild(li);
  });

 const hamburger = document.createElement("section");
  hamburger.classList.add("hamburger");
  hamburger.textContent = "☰";
  hamburger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  nav.appendChild(ul);
  section2.appendChild(nav);
  nav.appendChild(hamburger);
  header.appendChild(section2);


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

 


  return header;
}
