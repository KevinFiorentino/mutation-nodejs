import { Request, Response } from 'express';
import { DNA, algorithmIdentifyDNA } from '../models/mutation.model';

export const identifyDNA = async (req: Request, res: Response) => {
  try {
    const DNA = req.body.dna;
    const resultDNA = await algorithmIdentifyDNA(DNA);
    res.status(200).send({ result: resultDNA });
  }
  catch (error) {
    res.status(500).send(error);
  }
}
