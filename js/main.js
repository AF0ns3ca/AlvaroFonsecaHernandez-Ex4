import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";

const resultadoContainer = document.createElement("div");
resultadoContainer.classList.add("resultado-container");
document.body.appendChild(resultadoContainer);

export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

const vehiculo = new Vehiculo('BMW','CLK','Rojo',1992,2400);
mostrarResultado('vehiculo');
vehiculo.mostrarDatos();
vehiculo.arrancar();
vehiculo.acelerar(140);
vehiculo.frenar();

const vehiculoObject = {
    marca: vehiculo.marca,
    modelo: vehiculo.modelo,
    color: vehiculo.color,
    fechaFabricacion: vehiculo.fechaFabricacion,
    cilindrada: vehiculo.cilindrada
};

for (const key in vehiculoObject) {
    //hasOwnProperty comprueba si la propiedad existe en el objeto
    if (vehiculoObject.hasOwnProperty(key)){
        localStorage.setItem(key, vehiculoObject[key]);
    }
}

for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)){
        console.log(`${key}: ${localStorage[key]}`);
    }
}

//Mostrar los datos de localStorage
const vehiculoLocalStorage = JSON.parse(localStorage.getItem("vehiculoObject"));
console.log(vehiculoLocalStorage);

mostrarResultado('-------------------------------------------------');
const deportivo = new AutomovilDeportivo("Ferrari", "Spider", "Amarillo", '2020', 4000, 500);
mostrarResultado('deportivo');
deportivo.mostrarDatos();
deportivo.arrancar();
deportivo.acelerar(140);
deportivo.frenar();

const deportivoObject = {
    marca: deportivo.marca,
    modelo: deportivo.modelo,
    color: deportivo.color,
    fechaFabricacion: deportivo.fechaFabricacion,
    cilindrada: deportivo.cilindrada,
    potenciaMotor: deportivo.potenciaMotor
};

for (const key2 in deportivoObject) {
    if (deportivoObject.hasOwnProperty(key2)){
        localStorage.setItem(key2, deportivoObject[key2]);
    }
}



//Elimina dos propiedades de localStorage
// localStorage.removeItem("color");
// localStorage.removeItem("cilindrada");

//Elimina el contenido de localStorage  
//localStorage.clear();
