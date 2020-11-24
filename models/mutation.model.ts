import { fork } from 'child_process';

const forked = fork(process.cwd()+'/models/algorithm.ts');

export interface DNA {
  dna: string;
}

export function algorithmIdentifyDNA(DNA: String[]): Promise<any> {
  return new Promise((resolve, reject) => {
    forked.on('message', result => {
      resolve(result);
    })
    forked.send({ DNA })
  });
}