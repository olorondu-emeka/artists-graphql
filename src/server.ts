import * as indexResolver from './config/resolver';

import cors from 'cors';
import defaultQuery from './config/default.query';
import dotenv from 'dotenv';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
// import graphqlHTTP = require("express-graphql")
import helmet from 'helmet';
import indexSchema from './config/schema';

dotenv.config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// enable CORS for browser clients
server.use(cors());

// add necessary headers
server.use(helmet());

// mount graphql route
server.use(
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
server.use((_req, res, _next) => {
  return res.status(404).send("Route doesn't exist.");
});

server.use(
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

export default server;
