import { Vehiculo } from "./vehiculo.js";
import { mostrarResultado } from "./main.js";
export class AutomovilDeportivo extends Vehiculo{

    #potenciaMotor;

    constructor(marca, modelo, color, fechaFabricacion, cilindrada, potenciaMotor) {
        super(marca, modelo, color, fechaFabricacion, cilindrada);
        this.#potenciaMotor = potenciaMotor;
      }

      activarModoDeportivo(){
        return `El ${this.marca} ${this.modelo} ha acelerado ha activado el modo deportivo`;
      }

      get potenciaMotor() {
        return this.#potenciaMotor;
      }
      set potenciaMotor(potenciaMotor) {
        this.#potenciaMotor = potenciaMotor;
      }

      
      mostrarDatos(){
        super.mostrarDatos();
        const datos = `Potencia Motor: ${this.#potenciaMotor} <br>
        `;
        mostrarResultado(`<p>${datos}</p>`)
    }
}