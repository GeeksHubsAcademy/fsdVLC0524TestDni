const checkDni = () => {
  let letra_dada, numero_dni, resto;
  let dni = "24386106"

  dni = Array.from(dni);
  letra_dada = dni[dni.length - 1];
  numero_dni = parseInt(dni.slice(0, dni.length - 1).join(""));
  resto = numero_dni % 23;
  let letras = "TRWAGMYFPDXBNJZSQVHLCKET";
  letras = Array.from(letras);
  if (letra_dada === letras[resto]) {
    return "DNI correcto";
  } else {
    return "DNI incorrecto";
  }
};

module.exports = checkDni
