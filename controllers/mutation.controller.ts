import { Request, Response } from 'express';
import { DNA, algorithmIdentifyDNA } from '../models/mutation.model';

export const identifyDNA = async (req: Request, res: Response) => {
  try {
    const msg = await algorithmIdentifyDNA();
    res.status(200).send({ message: msg });
  }
  catch (error) {
    res.status(500).send(error);
  }
}
