export function skills(){
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./styles/skills.css";
  document.head.appendChild(link)

  const titulo = document.createElement("h2");
  const habilidades = document.createElement("section");
  const sectiontitulo = document.createElement("section");
  const imagenes = document.createElement("section");
  imagenes.classList = "imagenes";

  habilidades.id = "habilidadesmenu";
  habilidades.classList = "Habilidades";

  titulo.textContent = "Mis habilidades:";
  sectiontitulo.appendChild(titulo);
  habilidades.appendChild(sectiontitulo);

  const imagenesdata = [
    {src: "https://res.cloudinary.com/dbtc8nyvm/image/upload/v1733010664/174854_1_nqbtfv.png" ,alt: "Html5",},
    {src: "https://res.cloudinary.com/dbtc8nyvm/image/upload/v1733010631/CSS3_icon-icons_1_sgtklw.png" ,alt: "CSS3",},
    {src: "https://res.cloudinary.com/dbtc8nyvm/image/upload/v1733010658/javascript-logo-javascript-icon-transparent-free-png_1_qjwjpu.png" ,alt: "Javascript",},
    {src: "https://res.cloudinary.com/dbtc8nyvm/image/upload/v1733010643/25231_1_l1ucgt.png" ,alt: "Github",},
    {src: "https://res.cloudinary.com/dbtc8nyvm/image/upload/v1733010651/file_type_vscode_icon_130084_1_lyezza.png" ,alt: "VsCode",}
  ]
  const ul = document.createElement("ul");
  for (const imagendata of imagenesdata) {
    const img = document.createElement("img");
    img.src = imagendata.src;
    img.alt = imagendata.alt;
    img.classList = imagendata.alt;
    const li = document.createElement("li");
    li.appendChild(img)
    ul.appendChild(li);
  }
  imagenes.appendChild(ul);
  habilidades.appendChild(imagenes);

  return habilidades;
}