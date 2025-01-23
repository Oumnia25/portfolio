import { header } from "./componentes/header/header.js";
import { sobremi } from "./componentes/about/about.js";
import { skills } from "./componentes/skills/skills.js";
import { estudiosexperiencia } from "./componentes/experstudies/experstudies.js";
import { Proyectos } from "./componentes/project/project.js";
import { contacto } from "./componentes/contact/contact.js";
import { footer } from "./componentes/footer/footer.js";

const body = document.querySelector("body");
const main = document.createElement("main");


body.appendChild(header());

main.appendChild(sobremi());

main.appendChild(skills());

main.appendChild(estudiosexperiencia());

main.appendChild(Proyectos());

main.appendChild(contacto());

body.appendChild(footer());

body.append(main);