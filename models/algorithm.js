process.on('message', DNA => {
  console.log("DNA llegó al hijo: ", DNA)

  const result = hasMutation(DNA['DNA']);

  process.send(result);
})

function hasMutation(DNA) {

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

    const matrix90 = turnMatrix(DNA);

    for (let i = 0; i < matrix90.length; i++) {
      let resultRow = /(\b[aA]{4}|[tT]{4}|[gG]{4}|[cC]{4}\b)(?!.*\1)/.test(matrix90[i]);
      if (resultRow) {
        // Si lo encontramos, termina el algoritmo
        return true;
      }
    }

    /* ====================================================================== */
    /*  Si no lo logramos validar, buscamos si hay una "mutación" en oblicuo  */
    /* ====================================================================== */

    const oblique_matrix = obliqueMatrixGenerator(DNA);

    let flag = true;
    do {
      const arr_dna = oblique_matrix.next().value;
      if(arr_dna) {
        const new_arr_dna = arr_dna.map((e,i) => {
          if (i === 1) {
            let split = e.split("");
            split.push(split.shift());
            return split.join("");
          }
          if (i === 2) {
            let split = e.split("");
            split.push(split.shift());
            split.push(split.shift());
            return split.join("");
          }
          if (i === 3) {
            let split = e.split("");
            split.push(split.shift());
            split.push(split.shift());
            split.push(split.shift());
            return split.join("");
          }
          return e;
        });

        const arr_dna_matrix90 = turnMatrix(new_arr_dna);

        for (let i = 0; i < arr_dna_matrix90.length; i++) {
          let resultRow = /(\b[aA]{4}|[tT]{4}|[gG]{4}|[cC]{4}\b)(?!.*\1)/.test(arr_dna_matrix90[i]);
          if (resultRow) {
            flag = false;
            return true;    // FIN ALGORITMO
          }
        }
    
      }
      else {
        flag = false;
      }
      
    } while (flag);

    return false;
  }
  else {
    return false;
  }

}

// Giramos la matriz 90 grados para validarla horizontalmente
function turnMatrix(DNA) {

  let newMatriz = [];
  const lengthCol = DNA[0].length;

  for (let i = 0; i < lengthCol; i++) {
    let newRow = ""; 
    for (let j = 0; j < DNA.length; j++) {
      newRow += DNA[j].substr(i, 1)
    }
    newMatriz.push(newRow);
  }

  return newMatriz;
}


function* obliqueMatrixGenerator(DNA) {
  const cantRows = DNA.length;

  for (let i = 0; i < cantRows-3; i++) {
    let end = i;
    yield DNA.slice(i, end+4);
  }
}


module.exports = {
  hasMutation,
  turnMatrix
}
