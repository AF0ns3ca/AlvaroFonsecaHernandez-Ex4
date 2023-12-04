import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";

const container = document.querySelector(".container");
const resultadoContainer = document.createElement("div");
resultadoContainer.classList.add("resultado-container");
container.appendChild(resultadoContainer);

export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

//Creamos un nuevo objeto de tipo Vehiculo
const vehiculo1 = new Vehiculo('BMW','CLK','Rojo',1992,2400);
//Mostramos los datos del objeto vehiculo1
mostrarResultado('vehiculo');
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

//Creamos un objeto con los datos del vehiculo1
const vehiculoObject = {
    marca: vehiculo1.marca,
    modelo: vehiculo1.modelo,
    color: vehiculo1.color,
    fechaFabricacion: vehiculo1.fechaFabricacion,
    cilindrada: vehiculo1.cilindrada
};

//Limpiamos el localStorage para meter los datos del vehiculo
localStorage.clear();
//Guardamos los datos del vehiculo en localStorage
localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));
//Mostrar los datos de localStorage
console.log(JSON.parse(localStorage.getItem("vehiculo")));



mostrarResultado('-------------------------------------------------');
//Creamos un nuevo objeto de tipo AutomovilDeportivo
const deportivo1 = new AutomovilDeportivo("Ferrari", "Spider", "Amarillo", '2020', 4000, 500);
//Mostramos los datos del objeto deportivo
mostrarResultado('deportivo');
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(140);
deportivo1.frenar();

//Creamos un objeto con los datos del deportivo1
const deportivoObject = {
    marca: deportivo1.marca,
    modelo: deportivo1.modelo,
    color: deportivo1.color,
    fechaFabricacion: deportivo1.fechaFabricacion,
    cilindrada: deportivo1.cilindrada,
    potenciaMotor: deportivo1.potenciaMotor
};

//Guardamos los datos del deportivo en localStorage con un bucle iterativo
for (const key in deportivoObject) {
    if (deportivoObject.hasOwnProperty(key)){
        localStorage.setItem(key, deportivoObject[key]);
    }
}



//Elimina dos propiedades de localStorage para las claves "color" y "cilindrada" que tenemos guardadas, el objeto vehiculo estara intacto
localStorage.removeItem("color");
localStorage.removeItem("cilindrada");

//Elimina el contenido de localStorage, comentado para que no se borre el contenido antes de verlo  
//localStorage.clear();
