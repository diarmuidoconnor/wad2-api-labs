import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import moviesRouter from './api/movies';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/movies', moviesRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});