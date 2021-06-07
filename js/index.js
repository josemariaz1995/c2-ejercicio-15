import getPersonajes from "./funciones.js";

const cargarPersonajes = document.querySelector(".cargar-personajes");
const matarPersonajes = document.querySelector(".matar-familia");
const buscarFamilia = document.querySelector("input.familia");
const personajesPadre = document.querySelector(".personajes");

const personajes = document.querySelector(".personaje-dummy");
buscarFamilia.addEventListener("input", (e) => {
  console.log(e.target.value);
});
const limpiarPersonajes = () => {
  const personaje = document.querySelectorAll(".personaje");
  for (const elemento of personaje) {
    elemento.classList.add("personaje-dummy");
  }
};
limpiarPersonajes();

const crearMoldes = (datos) => {
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
};
const matarFamilia = (datos, buscarFamilia) => {
  for (const personaje of datos) {
    if (personaje.familia === buscarFamilia) {
      personaje.vivo = false;
    }
  }
  crearMoldes(datos);
};
cargarPersonajes.addEventListener("click", async () => {
  const response = getPersonajes;
  const datos = await response.then((dato) => dato);
  crearMoldes(datos);
});
matarPersonajes.addEventListener("click", async () => {
  const response = getPersonajes;
  const datos = await response.then((dato) => dato);
  matarFamilia(datos, buscarFamilia.value);
});
