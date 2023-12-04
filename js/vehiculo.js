import { mostrarResultado } from "./main.js";
export class Vehiculo {
  //Definir una variable como privada, se pone # antes de la almohadilla
  #marca;
  #modelo;
  #color;
  #fechaFabricacion;
  #cilindrada;

  constructor(marca, modelo, color, fechaFabricacion, cilindrada) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
    this.#fechaFabricacion = fechaFabricacion;
    this.#cilindrada = cilindrada;
  }

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

  acelerar(velocidad) {
    const mensaje = `<br> El ${this.#marca} ${
      this.#modelo
    } ha acelerado hasta ${velocidad} km/h`;
    mostrarResultado(`<p>${mensaje}</p>`);
  }

  arrancar() {
    const mensaje = `<br> El ${this.#marca} ${this.#modelo} ha arrancado.`;
    mostrarResultado(`<p>${mensaje}</p>`);
  }

  frenar() {
    const mensaje = `<br> El ${this.#marca} ${this.#modelo} ha frenado.`;
    mostrarResultado(`<p>${mensaje}</p>`);
  }

  mostrarDatos() {
    const datos = `
        La marca es: ${this.#marca} <br> 
        El modelo: ${this.#modelo} <br> 
        El color es: ${this.#color} <br> 
        Se fabrico el año: ${this.#fechaFabricacion} <br> 
        Cilindrada: ${this.#cilindrada} <br>
    `;
    mostrarResultado(`<p>${datos}</p>`);
  }

}
