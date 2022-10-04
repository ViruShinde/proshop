// const express = require('express');
// const products = require('./data/products');
// const dotenv = require('dotenv');

import express from 'express';
//import products from './data/products.js';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import colors from 'colors';

import productRoutes from './routes/productRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use((req, res, next) => {
  console.log('Hello');
  console.log(req.originalUrl);
  next();
});

app.get('/', (req, res) => {
  res.send('API is running.........');
});

/*
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

*/

app.use('/api/products', productRoutes);

//middleware
// not found error handler
app.use(notFound);

//error handler
app.use(errorHandler);

const PORT = process.env.PORT || 50000; // if didnt find then set to 5000

//app.listen(5000, console.log('Server running on port 5000'));

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
