import getPersonajes from "./funciones.js";

const cargarPersonajes = document.querySelector(".cargar-personajes");
const matarPersonajes = document.querySelector(".matar-familia");
const buscarFamilia = document.querySelector(".matar-familia").value;
const personajesPadre = document.querySelector(".personajes");
const personaje = document.querySelectorAll(".personaje");
const personajes = document.querySelector(".personaje-dummy");
const matarFamilia = (personajes, familia) => {
  const personajeDeFamilia = personajes.filter(
    (personaje) => personaje.famila === familia
  );
  for (const personaje of personajeDeFamilia) {
    personaje.vivo = false;
  }
};
const limpiarPersonajes = () => {
  for (const elemento of personaje) {
    elemento.classList.add("personaje-dummy");
  }
};
limpiarPersonajes();
const cargaPersonaje = cargarPersonajes.addEventListener("click", async () => {
  const response = getPersonajes;
  const datos = await response.then((dato) => dato);
  console.log(datos);
  limpiarPersonajes();

  for (const { nombre, familia, vivo } of datos) {
    const moldePersonaje = personajes.cloneNode(true);
    moldePersonaje.classList.remove("personaje-dummy");
    const nombrePersonaje = moldePersonaje.querySelector(".nombre");
    const familiaPersonaje = moldePersonaje.querySelector(".familia");
    const estado = moldePersonaje.querySelector(".estado");
    nombrePersonaje.textContent = nombre;
    familiaPersonaje.textContent = familia;
    estado.textContent = vivo ? "vivo" : "muerto";
    personajesPadre.append(moldePersonaje);
  }
});
matarPersonajes.addEventListener(
  "click",
  matarFamilia(async () => {
    const response = getPersonajes;
    const datos = await response.then((dato) => dato);
    return datos;
  }, buscarFamilia)
);
