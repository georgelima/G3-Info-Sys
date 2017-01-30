/* @flow */

import mongoose from 'mongoose';

import { URL_MONGO } from '../constants/index';

mongoose.connect(URL_MONGO);

mongoose.connection.on('connected', function (): void {
  console.log('Mongoose default connection open to ' + URL_MONGO);
});

// If the connection throws an error
mongoose.connection.on('error',function (err: string) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function (): void {
  console.log('Mongoose default connection disconnected');
});

// When the connection is open
mongoose.connection.on('open', function (): void {
  console.log('Mongoose default connection is open');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function(): void {
  mongoose.connection.close(function (): void {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});