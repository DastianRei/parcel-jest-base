function verificarGenero(nombre, genero, edad) {
  if (genero == "M") {
    if (edad > 30) return "Hola Señor " + { nombre };
    else return "Hola " + { nombre };
  }
  if (genero == "F") {
    if (edad > 30) return "Hola Señora " + { nombre };
    else return "Hola " + { nombre };
  }
}

export default sumar;
