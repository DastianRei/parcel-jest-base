let fechaActual = new Date();
let horaActual = fechaActual.getHours();

function verificarGenero(nombre, genero, edad, idioma) {
  let horario = "";
  if (idioma == "ES") {
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
  } else if (idioma == "EN") {
    if (horaActual > 12 && horaActual <= 19) {
      horario = "Good Afternoon";
    } else if (horaActual >= 24 && horaActual < 12) {
      horario = "Good Morning";
    } else if (horaActual > 19 && horaActual < 24) {
      horario = "Good Evening";
    }
    if (genero == "M") {
      if (edad > 30) {
        return horario + " Sir " + nombre;
      } else {
        return horario + " " + nombre;
      }
    } else if (genero == "F") {
      if (edad > 30) {
        return horario + " Miss " + nombre;
      } else {
        return horario + " " + nombre;
      }
    }
  }
}

export default verificarGenero;
