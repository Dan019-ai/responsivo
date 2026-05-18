let curso: string = "Programacion Web";
let descripcion: string = "Aprende HTLM, CSS Y JavaScript";
let precio: number = 15000;
let disponible: boolean = true;

let tituloCurso = document.querySelector("#tituloCurso");
let descripcionCurso = document.querySelector("#descrionCurso");
let precioCurso = document.querySelector("#precioCurso");
let estadoCurso = document.querySelector("#estadoCurso");

if (tituloCurso) {
    tituloCurso.innerHTML = curso;
}

if (descripcionCurso) {
    descripcionCurso.innerHTML = descripcion;
}

if (precioCurso) {
    precioCurso.innerHTML = "Precio: $" + precio;
}

if (estadoCurso) {
    if (disponible) {
        estadoCurso.innerHTML = "Cupos disponibles";
    } else {
        estadoCurso.innerHTML = "Curso completo";
    }
}
alert("Bienvenidos");
console.log("Hola");

document.querySelector("h1").innerHTML = "My Web";

let boton = document.querySelector("#boton") as HTMLButtonElement | null;
if (boton) {
    boton.onclick = function () {
      document.body.style.backgroundColor = "lightblue";   
    }
    
}