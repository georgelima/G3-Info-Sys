import express from 'express';
import bodyParser from 'body-parser';

import GraphQLHTTP from 'express-graphql';
import Schema from '../graphql/schemas/customerSchema';

const app = express(); 

app.use("/graphql", GraphQLHTTP({
  graphiql: true,
  pretty: true,
  schema: Schema
}));

app.set('PORT', 3001);

export default app;
