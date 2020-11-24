import { Request, Response } from 'express';

export const identificarDNA = async (req: Request, res: Response) => {
  try {
    res.status(200).send({ message: "OK" });
  }
  catch (error) {
    res.status(500).send(error);
  }
}
