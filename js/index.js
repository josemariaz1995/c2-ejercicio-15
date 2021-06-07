import getPersonajes from "./funciones.js";

const personajes = document.querySelectorAll(".personajes");
console.log(personajes);
(async () => {
  const response = getPersonajes;
  console.log(response);
  const datos = await response.then((dato) => dato);
})();
