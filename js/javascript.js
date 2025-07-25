//MENU HAMBURGUESA

let lanzador = "#enlace-burger";
let desplegable = "#menu";
let despliegaClase = "nav-displayed";

function nav() {
    let lanz = document.querySelector(lanzador);
    lanz.addEventListener("click", despliegaMenu);
}

function despliegaMenu() {
    let despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}

nav();

//COOKIES

const popup = document.getElementById("cookie-popup");
const btn = document.getElementById("accept-cookies");

if (!localStorage.cookiesAccepted) {
    popup.classList.add("show");
}

btn.addEventListener("click", function () {
    localStorage.cookiesAccepted = "true";
    popup.classList.remove("show");
});