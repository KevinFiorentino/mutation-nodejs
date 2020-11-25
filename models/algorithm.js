process.on('message', DNA => {
  console.log("DNA llegó al hijo: ", DNA)

  const result = validateDNA(DNA['DNA']);

  process.send(result);
})

function validateDNA(DNA) {

  /* ====================================================== */
  /*  Primero validamos la estructura del array de entrada  */
  /* ====================================================== */

  // Guardamos la cantidad de filas y la cantidad de columnas de la primera fila para usar de referencia.
  const cantRows = DNA.length;
  const cantCols = DNA[0].length;

  // Ambos deben ser, como mínimo, mayor a tres.
  if(cantRows > 3 && cantCols > 3) {

    const validateMatrix = DNA.filter(row => {
      // Validamos que cada fila tenga igual cantidad de columnas y no contenga otros caracteres que no sean aA tT gG cC
      return (row.length === cantCols && !/([^aAtTgGcC])/.test(row)) ? true : false;
    });

    // Si no tenemos la misma cantidad de filas en ambos array, alguno era invalido y retornamos false
    if (validateMatrix.length !== DNA.length) {
      return false;
    }

    /* ======================================================== */
    /*  Segundo, validamos si hay una "mutación" en horizontal  */
    /* ======================================================== */

    for (let i = 0; i < DNA.length; i++) {
      let resultRow = /(\b[aA]{4}|[tT]{4}|[gG]{4}|[cC]{4}\b)(?!.*\1)/.test(DNA[i]);
      if (resultRow) {
        // Si lo encontramos, termina el algoritmo
        return true;
      }
    }

    /* ======================================================================= */
    /*  Si no lo logramos validar, buscamos si hay una "mutación" en vertical  */
    /* ======================================================================= */

    // Giramos la matriz 90 grados para validarla horizontalmente
    const matrix90 = turnMatrix(DNA);

    return false;
  }
  else {
    return false;
  }

}

function turnMatrix(DNA) {

  return true;
}

module.exports = {
  validateDNA
}
