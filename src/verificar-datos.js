let fechaActual = new Date();
let horaActual = fechaActual.getHours();

function verificarGenero(nombre, genero, edad) {
  let horario = "";
  if (horaActual > 12 && horaActual <= 19) {
    horario = "Buenas Tardes";
  } else if (horaActual >= 24 && horaActual < 12) {
    horario = "Buenos Dias";
  } else if (horaActual > 19 && horaActual < 24) {
    horario = "Buenas Noches";
  }
  if (genero == "M") {
    if (edad > 30) {
      return horario + " Señor " + nombre;
    } else {
      return horario + " joven " + nombre;
    }
  } else if (genero == "F") {
    if (edad > 30) {
      return horario + " Señora " + nombre;
    } else {
      return horario + " jovencita " + nombre;
    }
  }
}

export default verificarGenero;
