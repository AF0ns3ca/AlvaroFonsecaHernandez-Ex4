import { mostrarResultado } from "./main.js";
export class Vehiculo {
  //VARIABLES PRIVADAS
  #marca;
  #modelo;
  #color;
  #fechaFabricacion;
  #cilindrada;

  //CONSTRUCTOR POR PARAMETROS
  constructor(marca, modelo, color, fechaFabricacion, cilindrada) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
    this.#fechaFabricacion = fechaFabricacion;
    this.#cilindrada = cilindrada;
  }

  //GETTERS Y SETTERS
  get marca() {
    return this.#marca;
  }

  set marca(marca) {
    this.#marca = marca;
  }

  get modelo() {
    return this.#modelo;
  }

  set modelo(modelo) {
    this.#modelo = modelo;
  }

  get color() {
    return this.#color;
  }

  set color(color) {
    this.#color = color;
  }

  get fechaFabricacion() {
    return this.#fechaFabricacion;
  }

  set fechaFabricacion(fechaFabricacion) {
    this.#fechaFabricacion = fechaFabricacion;
  }

  get cilindrada() {
    return this.#cilindrada;
  }

  set cilindrada(cilindrada) {
    this.#cilindrada = cilindrada;
  }

  //METODO ACELERAR
  acelerar(velocidad) {
    const mensaje = `<br> El ${this.#marca} ${
      this.#modelo
    } ha acelerado hasta ${velocidad} km/h`;
    //USO DE MOSTRARRESULTADO
    mostrarResultado(`<p>${mensaje}</p>`);
  }

  //METODO ARRANCAR
  arrancar() {
    const mensaje = `<br> El ${this.#marca} ${this.#modelo} ha arrancado.`;
    //USO DE MOSTRARRESULTADO
    mostrarResultado(`<p>${mensaje}</p>`);
  }

  //METODO FRENAR
  frenar() {
    const mensaje = `<br> El ${this.#marca} ${this.#modelo} ha frenado.`;
    //USO DE MOSTRARRESULTADO
    mostrarResultado(`<p>${mensaje}</p>`);
  }

  //METODO MOSTRAR DATOS
  mostrarDatos() {
    const datos = `
        La marca es: ${this.#marca} <br> 
        El modelo: ${this.#modelo} <br> 
        El color es: ${this.#color} <br> 
        Se fabrico el año: ${this.#fechaFabricacion} <br> 
        Cilindrada: ${this.#cilindrada} <br>
    `;
    //USO DE MOSTRARRESULTADO
    mostrarResultado(`<p>${datos}</p>`);
  }

}
