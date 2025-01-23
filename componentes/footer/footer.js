export function footer() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./styles/footer.css";
  document.head.appendChild(link)

  const footer = document.createElement("footer");

  const mensaje = document.createElement("p");
  mensaje.textContent = "Página creada y diseñada por Oumnia Echatbi Dehak";

  footer.appendChild(mensaje);
  return footer;
}
