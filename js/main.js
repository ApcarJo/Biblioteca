
// let Peliculas = [
//     {nombre: "Rey León", rate: 3},
//     {nombre: "Soy Leyenda", rate: 13},
//     {nombre: "La marca del demonio", rate: 18},
//     {nombre: "A todo gas", rate: 8}
// ];

// let nombre = prompt("Qué pelicula quieres ver");
let edad = parseInt(prompt("¿Qué edad tienes?"));

// for (let i=0; i<Peliculas.length; i++){
//     if (nombre==Peliculas[i].nombre){
//         (edad>=Peliculas[i].rate) ? console.log("Puedes ver la película") : console.log("No tienes edad para ver la película");
//     }
// }

let valor = prompt("Quieres ver series o pelis");
let mensaje = document.getElementById("mensaje");
let cartelera = document.getElementById("cartelera");
let edadminima=0;
let mensajefinal = document.getElementById("mensajefinal");

let Biblioteca = {
        Pelis: [
        {nombre: "Rey León", rate: 3},
        {nombre: "Soy Leyenda", rate: 13},
        {nombre: "La marca del demonio", rate: 18},
        {nombre: "A todo gas", rate: 8}
        ],

        Series:  [
        {nombre: "Juego de tronos" , rate: 18},
        {nombre: "The expanse" , rate: 12},
        {nombre: "Sense8" , rate: 18},
        {nombre: "Ricky & Morty", rate: 18},
        {nombre: "Pepa Pig" , rate: 5},
        ]
    };

if (valor=="series"){
    mensaje.innerHTML="Has decidido ver una serie";
    for (let i=0; i<Biblioteca.Series.length; i++){
        // edadminima = Biblioteca.Series[i].rate;
        console.log("comprobando el dato", edadminima);
        cartelera.innerHTML+= `<div onclick="dime(edad, ${Biblioteca.Series[i].rate})">${Biblioteca.Series[i].nombre}</div><br>`;

    }
} else if (valor=="peliculas"){
    mensaje.innerHTML="Has decidido ver una pelicula";
    for (let i=0; i<Biblioteca.Pelis.length; i++){
        cartelera.innerHTML+= `${Biblioteca.Pelis[i].nombre}<br>` ;
    }
} else {console.log("la lias parda");}

function dime(edad, valor){
    mensajefinal.innerHTML="";
    console.log(edad);
    console.log(valor);
    if (edad>=valor){
        console.log("Patata");
        mensajefinal.innerHTML="We did it, eureka!!";
    }

}

