// const express = require('express');
// const path = require('path');
// const ejs = require('ejs');


import express  from 'express';
import path  from 'path';

const app = express();

app.use(express.static('public'));

// app.set('view engine', 'ejs');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'public', `${page}.html`);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(createPath('index'));
});
