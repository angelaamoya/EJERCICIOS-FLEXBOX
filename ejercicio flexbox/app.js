const hamburger = document.querySelector (".hamburger");
const navLinks = document.querySelector(".nav-links");

// asociamos al elemento que hemos seleccionado un evento click
hamburger.addEventListener ("click", function() {
// alert ("Hola, buenos días")

console.log("Con esto podemos mandar mensajes a la consola");

navLinks.classList.toggle("active");

})