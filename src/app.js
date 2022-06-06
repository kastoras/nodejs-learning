const express = require('express');

const app = express();

app.use((req,res,next) => {
  console.log('All middleware!');
  next();
});

app.use('/create',(req,res,next) => {
  res.send('<h1>Create Page</h1>');
});

app.use('/',(req,res,next) => {
  res.send('<h1>Default</h1>');
});

app.listen(3000);