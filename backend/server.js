import './db.js';
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { getLogout, postJoin, postLogin } from './controller/userController.js';

const app = express();

const handleListen = () => {
  console.log('Listening on 8080');
};

app.listen(8080, handleListen);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.API_KEY }),
  })
);

app.get('/logout', getLogout);
app.post('/join', postJoin);
app.post('/login', postLogin);
