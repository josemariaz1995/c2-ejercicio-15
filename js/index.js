import { getPersonajes, mataPersonajes } from "./funciones.js";

const cargarPersonajes = document.querySelector(".cargar-personajes");
const matarPersonajes = document.querySelector(".matar-familia");
const buscarFamilia = document.querySelector("input.familia");
const personajesPadre = document.querySelector(".personajes");

const personajes = document.querySelector(".personaje-dummy");
buscarFamilia.addEventListener("input", (e) => {
  console.log(e.target.value);
});
const cargarDatos = async () => {
  const response = await getPersonajes;
  const datos = await response().then((dato) => dato);
  return datos;
};
const cargarMatarPersonaje = async (familia) => {
  const response = await mataPersonajes(familia);

  return response;
};

console.log(cargarDatos());
const limpiarPersonajes = () => {
  const personaje = document.querySelectorAll(".personaje");
  for (const elemento of personaje) {
    elemento.classList.add("personaje-dummy");
  }
};
limpiarPersonajes();

const crearMoldes = async (datos) => {
  limpiarPersonajes();
  try {
    for (const { nombre, familia, vivo } of await datos) {
      const moldePersonaje = personajes.cloneNode(true);
      moldePersonaje.classList.remove("personaje-dummy");
      const nombrePersonaje = moldePersonaje.querySelector(".nombre");
      const familiaPersonaje = moldePersonaje.querySelector(".familia");
      const estado = moldePersonaje.querySelector(".estado");
      nombrePersonaje.textContent = ` ${nombre} `;
      familiaPersonaje.textContent = ` ${familia} `;
      estado.textContent = vivo ? " vivo " : " muerto ";
      personajesPadre.append(moldePersonaje);
    }
  } catch (error) {
    console.log(error);
  }
};
cargarPersonajes.addEventListener("click", () => {
  crearMoldes(cargarDatos());
});
matarPersonajes.addEventListener("click", () => {
  crearMoldes(cargarMatarPersonaje(buscarFamilia.value));
});
/* const matarFamilia = async (datos, buscarFamilia) => {
  for (const personaje of await datos) {
    if (personaje.familia === buscarFamilia) {
      personaje.vivo = false;
    }
  }
  crearMoldes(datos);
};


 */
