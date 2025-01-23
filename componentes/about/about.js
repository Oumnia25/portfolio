import './about.css';


export default function sobremi() {

  const sectionabout = document.createElement("section");
  sectionabout.id = "sobremimenu";
  sectionabout.classList.add("sobremi");

  const sectionInicio = document.createElement("section");
  sectionInicio.id = "iniciomenu";
  sectionInicio.classList.add("inicio");

  const sectionTexto = document.createElement("section");
  const saludo = document.createElement("h1");
  saludo.textContent = "¡Hola!";
  const texto = document.createElement("p");
  texto.textContent = "Soy Oumnia Echatbi y soy desarrolladora web, ¿quieres saber un poco más de mi?";
  sectionTexto.appendChild(saludo);
  sectionTexto.appendChild(texto);

  const sectionImg = document.createElement("section");
  const imagen = document.createElement("img");
  imagen.src = "https://res.cloudinary.com/dbtc8nyvm/image/upload/v1732919106/1e2b624b-b9d7-4012-ae62-17dd52b3fbd4_wnqgov.jpg";
  imagen.alt = "Foto de Oumnia Echatbi";
  imagen.classList.add("foto-perfil");
  sectionImg.appendChild(imagen);

  sectionInicio.appendChild(sectionTexto);
  sectionInicio.appendChild(sectionImg);

  const sectionSobremi = document.createElement("section");
  sectionSobremi.classList.add("sobre-mi");

  const div1 = document.createElement("div");
  const h2about = document.createElement("h2");
  h2about.textContent = "Sobre mí:";
  h2about.classList.add("title");
  div1.appendChild(h2about);

  const div2 = document.createElement("div");
  const pabout = document.createElement("p");
  pabout.textContent =
    "Como desarrolladora web full stack mi intención es aprender lo máximo posible de cara a mi trabajo. Busco que mi código sea lo más correcto en cuanto a sintaxis y mis páginas sean lo más responsive posible. Aprendo de mis errores y eso me hace mejorar cada día más y seguir formándome incluso cuando termine mi curso.";
  pabout.classList.add("parrafo");
  div2.appendChild(pabout);

  sectionSobremi.appendChild(div1);
  sectionSobremi.appendChild(div2);

  sectionabout.appendChild(sectionInicio);
  sectionabout.appendChild(sectionSobremi);

  return sectionabout;
}
