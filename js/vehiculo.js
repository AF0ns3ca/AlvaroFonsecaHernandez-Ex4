class Vehiculo {
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
  get modelo() {
    return this.#modelo;
  }
  get color() {
    return this.#color;
  }
  get fechaFabricacion() {
    return this.#fechaFabricacion;
  }
  get cilindrada() {
    return this.#cilindrada;
  }
  set marca(marca) {
    this.#marca = marca;
  }
  set modelo(modelo) {
    this.#modelo = modelo;
  }
  set color(color) {
    this.#color = color;
  }
  set fechaFabricacion(fechaFabricacion) {
    this.#fechaFabricacion = fechaFabricacion;
  }
  set cilindrada(cilindrada) {
    this.#cilindrada = cilindrada;
  }

  mostrarResultado() {
    let resultado = `Marca: ${marca} <br> Modelo: ${modelo} <br> Color: ${color} <br> Fecha de Fabricacion: ${fechaFabricacion} <br> Cilindrada: ${cilindrada}`
  }

}
