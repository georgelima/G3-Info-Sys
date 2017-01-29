import express from 'express';
import bodyParser from 'body-parser';

// import { graphql } from 'graphql';
// import { introspectionQuery } from 'graphql/utilities';
// import graphqlHTTP from 'express-graphql';

const app = express(); 

app.set('PORT', 3001);

app.get("/", (req, res) => res.send("Running"));

export default app;
