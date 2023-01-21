import './db.js';
import express from 'express';
import cors from 'cors';
import { postJoin } from './controller/userController.js';

const app = express();

const handleListen = () => {
  console.log('Listening on 8080');
};

app.listen(8080, handleListen);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/join', postJoin);
