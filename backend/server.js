import express from 'express';

const app = express();

const handleListen = () => {
  console.log('Listening on 8080');
};

app.listen(8080, handleListen);
