const { fork } = require('child_process');

const forked = fork(process.cwd()+'/models/algorithm.js');

function algorithmIdentifyDNA(DNA) {
  return new Promise((resolve, reject) => {
    forked.on('message', result => {
      resolve(result);
    })
    forked.send({ DNA })
  });
}

module.exports = {
  algorithmIdentifyDNA
}