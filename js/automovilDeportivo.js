export class AutomovilDeportivo extends Vehiculo{

    #potenciaMotor;

    constructor(marca, modelo, color, fechaFabricacion, cilindrada, potenciaMotor) {
        super(marca, modelo, color, fechaFabricacion, cilindrada);
        this.#potenciaMotor = potenciaMotor;
      }

      get potenciaMotor() {
        return this.#potenciaMotor;
      }
      set potenciaMotor(potenciaMotor) {
        this.#potenciaMotor = potenciaMotor;
      }

      activarModoDeportivo(){
        return `El ${marca} ${modelo} ha acelerado ha activado el modo deportivo`;
      }
    mostrarResultado(){
        let resultado = super.mostrarResultado()+= `Potencia Motor: ${this.potenciaMotor}`;
    }
}