import express from 'express';
import { identificarDNA } from '../controllers/mutation.controller';


export const mutationRouter = express.Router();

mutationRouter.get("/", identificarDNA);
