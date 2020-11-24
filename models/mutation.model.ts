import { fork } from 'child_process';

const forked = fork(process.cwd()+'/models/algorithm.ts');

export interface DNA {
  dna: string;
}

export function algorithmIdentifyDNA() { //: Promise<string> {
  return new Promise((resolve, reject) => {
    forked.on('message', msg => {
      console.log('Mensaje del hijo: ', msg)
      resolve(msg);
    })
    setTimeout(() => {
      forked.send({mensaje: 'Hola!'})
    }, 1000)
  });
}