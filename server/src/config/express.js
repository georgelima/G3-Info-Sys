/* @flow */

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import GraphQLHTTP from 'express-graphql';
import Schema from '../graphql/schemas/customerSchema';

const app: any = express(); 

process.env.NODE_ENV = 'developement';

if (process.env.NODE_ENV === 'developement') {
  app.use(cors());
}

app.use("/graphql", GraphQLHTTP({
  graphiql: true,
  pretty: true,
  schema: Schema
}));

app.set('PORT', 3001);

export default app;
