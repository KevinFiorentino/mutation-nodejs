import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import { mutationRouter } from './routes/mutation.router';

// (\b[aA]{4}|[tT]{4}|[gG]{4}|[cC]{4}\b)(?!.*\1)

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use(logger('dev'));

app.use('/mutation', mutationRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
