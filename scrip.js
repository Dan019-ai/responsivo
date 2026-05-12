alert("Bienvenidos");
console.log ("Hola");

document.querySelector("h1").innerHTML = "My Web";

document.querySelector("h1").innerHTML = "Cambiamos el titulo"
let nombre = "Curso de Programacion Web";
let descripcion ="Aprendemos HTML, CSS y JavaScript.";
let precio = 8900;

document.getElementById("nombreProducto").innerHTML = nombre;
document.getElementById("descripcionProducto").innerHTML = descripcion;
document.getElementById("precioProducto").innerHTML = "Precio: $ " + precio;


document.querySelector("#boton").onclick = function(){
    document.body.style.backgroundColor = 'lightblue';
}

