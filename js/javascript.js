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
const rejectBtn = document.getElementById("reject-cookies");


if (!localStorage.cookiesAccepted && !localStorage.cookiesRejected) {
    popup.classList.add("show");
}

btn.addEventListener("click", function () {
    localStorage.cookiesAccepted = "true";
    popup.classList.remove("show");
});

rejectBtn.addEventListener("click", function () {
    localStorage.cookiesRejected = "true";
    popup.classList.remove("show");
});