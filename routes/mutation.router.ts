import express from 'express';
import { identifyDNA } from '../controllers/mutation.controller';

export const mutationRouter = express.Router();

mutationRouter.post("/", identifyDNA);
