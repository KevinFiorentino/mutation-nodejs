const { connection } = require('../config/database');
const { fork } = require('child_process');

const forked = fork(process.cwd()+'/models/algorithm.js');

function algorithmIdentifyDNA(DNA) {
  return new Promise((resolve, reject) => {
    forked.on('message', result => {

      const mutation = {
        dna: DNA.join(),
        status: result
      }
      connection.query(`INSERT INTO mutation SET ?`, mutation,
        (error) => {
          if (error) reject(error);
          resolve(result);
      });

    })
    forked.send({ DNA })
  });
}

module.exports = {
  algorithmIdentifyDNA
}