process.on('message', msg => {
  console.log('Mensaje del padre: ', msg)

  setTimeout(() => {
    console.log("enviando mensaje del hijo");
    (<any> process).send("Mensaje del algoritmo hijo!!!");
  }, 1000) 
})
