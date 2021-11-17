import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import moviesRouter from './api/movies';
import './db';
import './seedData'
import usersRouter from './api/users';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});