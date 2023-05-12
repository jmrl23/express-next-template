import express, { json, urlencoded } from 'express';
import { corsMiddleware, helmetMiddleware } from './common/middlewares';

const app = express();

app.use(
  helmetMiddleware({
    crossOriginResourcePolicy: {
      policy: 'cross-origin',
    },
  }),
  corsMiddleware(),
  json(),
  urlencoded({ extended: false }),
);

export default app;
