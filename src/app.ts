import {} from 'graphql-subscriptions';

import * as indexResolver from './config/resolver';

import cors from 'cors';
import defaultQuery from './config/default.query';
import dotenv from 'dotenv';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import helmet from 'helmet';
import indexSchema from './config/schema';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable CORS for browser clients
app.use(cors());

// add necessary headers
app.use(helmet());

// mount graphql route
app.use(
  '/graphql',
  graphqlHTTP({
    schema: indexSchema,
    rootValue: indexResolver,
    graphiql: {
      defaultQuery,
      headerEditorEnabled: true
    }
  })
);

// handle unknown route
app.use((_req, res, _next) => {
  return res.status(404).send("Route doesn't exist.");
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: indexSchema,
    rootValue: indexResolver,
    graphiql: {
      defaultQuery,
      headerEditorEnabled: true
    }
  })
);

export default app;
