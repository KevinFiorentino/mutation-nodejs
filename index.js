import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import { usuariosRouter } from './routes/usuarios.router';

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use(logger('dev'));

app.use('/users', usuariosRouter);

app.use('/kevin', (req, res) => {
  res.status(200).send({ message: 'Hello kevin!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
