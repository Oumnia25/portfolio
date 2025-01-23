export function estudiosexperiencia() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./styles/experstudies.css";
  document.head.appendChild(link)

  const seccionEstudiosExperiencia = document.createElement("section");
  seccionEstudiosExperiencia.id = "estudios-experienciamenu";
  seccionEstudiosExperiencia.classList = "estudios-experiencia";
  const experienciaSection = document.createElement("section");
  experienciaSection.id = "experiencia";
  const estudiosSection = document.createElement("section");
  estudiosSection.id = "estudios";
  const experienciaTitulo = document.createElement("h3");
  experienciaTitulo.textContent = "Experiencia";
  const experienciaDescripcion = document.createElement("p");
  experienciaDescripcion.textContent =
    "Durante mi formación como desarrolladora web full stack, he completado varios proyectos que destacan mis habilidades y conocimientos:";
  const experienciaLista = document.createElement("ul");
  const proyectos = [
    {
      nombre: "Recreación de Pinterest",
      descripcion:
        "Un proyecto realizado utilizando la API de Pinterest, junto con JavaScript, CSS y HTML para crear una interfaz funcional y dinámica.",
    },
    {
      nombre: "Copia de la página web de Converse",
      descripcion:
        "Un clon estático de la página oficial de Converse, desarrollado exclusivamente con HTML y CSS, respetando su diseño original.",
    },
    {
      nombre: "Portafolio Personal",
      descripcion:
        "Un portafolio diseñado para destacar mis habilidades y proyectos, desarrollado con HTML, CSS y JavaScript.",
    },
  ];
  for (const proyecto of proyectos) {
    const listItem = document.createElement("li");
    const boldText = document.createElement("p");
    boldText.textContent = `${proyecto.nombre}: `;
    listItem.appendChild(boldText);
    listItem.appendChild(document.createTextNode(proyecto.descripcion));
    experienciaLista.appendChild(listItem);
  }
  experienciaSection.appendChild(experienciaTitulo);
  experienciaSection.appendChild(experienciaDescripcion);
  experienciaSection.appendChild(experienciaLista);

  const estudiosTitulo = document.createElement("h3");
  estudiosTitulo.textContent = "Estudios";

  const estudiosLista = document.createElement("ul");
  const estudios = [
    {
      titulo: "Curso Full Stack en The Power Education",
      descripcion:
        "Actualmente cursandolo, aprendo diferentes lenguajes de programación y desarrollo de páginas web dinámicas.",
    },
    {
      titulo: "Educación Secundaria Obligatoria (ESO)",
      descripcion:
        "Cursado en el IES La Poveda y finalizado en junio de 2021.",
    },
  ];

  for (const estudio of estudios) {
    const estudioTitulo = document.createElement("li");
    const estudioDescripcion = document.createElement("p");

    estudioTitulo.textContent = estudio.titulo;
    estudioDescripcion.textContent = estudio.descripcion;
    estudiosLista.appendChild(estudioTitulo);
    estudioTitulo.appendChild(estudioDescripcion);
  }
  estudiosSection.appendChild(estudiosTitulo);
  estudiosSection.appendChild(estudiosLista);

  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Estudios / Experiencia";
  let showingExperiencia = true;

  toggleButton.addEventListener("click", () => {
    if (showingExperiencia) {
      experienciaSection.style.display = "none";
      estudiosSection.style.display = "block";
    } else {
      experienciaSection.style.display = "block";
      estudiosSection.style.display = "none";
    }
    showingExperiencia = !showingExperiencia;
  });
  seccionEstudiosExperiencia.appendChild(toggleButton);
  seccionEstudiosExperiencia.appendChild(experienciaSection);
  seccionEstudiosExperiencia.appendChild(estudiosSection);
  experienciaSection.style.display = "block";
  estudiosSection.style.display = "none";
  return seccionEstudiosExperiencia;
}
