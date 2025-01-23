export function Proyectos() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./styles/projects.css";
  document.head.appendChild(link)

  const sectionProyectos = document.createElement("section");
  sectionProyectos.id = "proyectosmenu";
  sectionProyectos.classList = "Proyectos";

  const titulo = document.createElement("h2");
  titulo.textContent = "Mis Proyectos";
  sectionProyectos.appendChild(titulo);
  const lista = document.createElement("section");

  const listaProyectos = document.createElement("ul");

  const proyectosData = [
    {
      nombre: "Recreación de Pinterest",
      descripcion: "Uso de la API de Pinterest para mostrar imágenes dinámicamente.",
      url: "https://storied-axolotl-c4e69a.netlify.app/"
    },
    {
      nombre: "Copia de Converse",
      descripcion: "Replica estática de la página web de Converse utilizando HTML y CSS.",
      url: "https://superb-pithivier-188280.netlify.app/"
    },
   
  ];

  for (const proyecto of proyectosData) {
    const listItem = document.createElement("li");

    const proyectoTitulo = document.createElement("strong");
    proyectoTitulo.textContent = proyecto.nombre;

    const proyectoDescripcion = document.createElement("p");
    proyectoDescripcion.textContent = proyecto.descripcion;

    const proyectoLink = document.createElement("a");
    proyectoLink.href = proyecto.url;
    proyectoLink.textContent = "Ver proyecto";
    proyectoLink.target = "_blank";

    listItem.appendChild(proyectoTitulo);
    listItem.appendChild(proyectoDescripcion);
    listItem.appendChild(proyectoLink);

    listaProyectos.appendChild(listItem);
  }
  listaProyectos.classList = "lista";

  lista.appendChild(listaProyectos);
  sectionProyectos.appendChild(lista);
  return sectionProyectos;
}
