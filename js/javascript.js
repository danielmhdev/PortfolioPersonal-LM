//MENU HAMBURGUESA

let lanzador = ".burger-menu";
let desplegable = ".nav-menu";
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