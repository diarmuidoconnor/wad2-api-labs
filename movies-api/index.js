import express from 'express';
import bodyParser from 'body-parser';
import moviesRouter from './api/movies';
import loglevel from 'loglevel';
import dotenv from 'dotenv';

dotenv.config();

if (process.env.NODE_ENV === 'test') {
  loglevel.setLevel('warn')
  } else {
  loglevel.setLevel('info')
  }

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/movies', moviesRouter);

app.listen(port, () => {
  loglevel.info(`Server running at ${port}`);
});

export default app;