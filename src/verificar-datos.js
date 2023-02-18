let fechaActual = new Date();
let horaActual = fechaActual.getHours();

function verificarGenero(nombre, genero, edad) {
  if (genero == "M") {
    if (edad > 30) {
      return "Buenas Tardes Señor " + nombre;
    } else {
      return "Hola joven " + nombre;
    }
  } else if (genero == "F") {
    if (edad > 30) {
      return "Hola Señora " + nombre;
    } else {
      return "Hola jovencita " + nombre;
    }
  }
}

export default verificarGenero;
