import { Vehiculo } from "./vehiculo.js";
import { mostrarResultado } from "./main.js";
//CLASE AUTOMOVIL DEPORTIVO
export class AutomovilDeportivo extends Vehiculo {
  //ATRIBUTO PRIVADO POTENCIAMOTOR
  #potenciaMotor;

  constructor(
    marca,
    modelo,
    color,
    fechaFabricacion,
    cilindrada,
    potenciaMotor
  ) {
    super(marca, modelo, color, fechaFabricacion, cilindrada);
    this.#potenciaMotor = potenciaMotor;
  }

  activarModoDeportivo() {
    const mensaje = `<br> El ${this.marca} ${this.modelo} ha acelerado ha activado el modo deportivo`;
    //USO DE MOSTRARRESULTADO
    mostrarResultado(`<p>${mensaje}</p>`);
  }

  get potenciaMotor() {
    return this.#potenciaMotor;
  }
  set potenciaMotor(potenciaMotor) {
    this.#potenciaMotor = potenciaMotor;
  }

  mostrarDatos() {
    super.mostrarDatos();
    const datos = `Potencia Motor: ${this.#potenciaMotor} <br>
        `;
    mostrarResultado(`<p>${datos}</p>`);
  }
}
