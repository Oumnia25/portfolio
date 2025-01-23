export function contacto() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./styles/contact.css";
  document.head.appendChild(link)

  const sectionContacto = document.createElement("section");
  sectionContacto.id = "contactomenu";
  sectionContacto.classList = "contacto";

  const mensaje = document.createElement("p");
  mensaje.textContent = "Si te ha gustado mi trabajo y te interesa ponerte en contacto conmigo, aquí te dejo cómo hacerlo:";
  sectionContacto.appendChild(mensaje);

  const contactoLinks = document.createElement("div");

  const linkedin = document.createElement("a");
  linkedin.href = "https://www.linkedin.com/in/oumnia-echatbi-dehak-034b921ab/";
  linkedin.target = "_blank";

  const linkedinImg = document.createElement("img");
  linkedinImg.src = "https://res.cloudinary.com/dbtc8nyvm/image/upload/v1733948725/linkedin_lbtdxj.png";
  linkedinImg.alt = "LinkedIn";
  linkedin.appendChild(linkedinImg);
  contactoLinks.appendChild(linkedin);

  const gmail = document.createElement("a");
  gmail.href = "mailto:Oumniaechatbi12@gmail.com";
  gmail.target = "_blank";

  const gmailImg = document.createElement("img");
  gmailImg.src = "https://res.cloudinary.com/dbtc8nyvm/image/upload/v1733948714/104069_f8p3uz.png";
  gmailImg.alt = "Gmail";
  gmail.appendChild(gmailImg);
  contactoLinks.appendChild(gmail);

  sectionContacto.appendChild(contactoLinks);
  return sectionContacto;
}
