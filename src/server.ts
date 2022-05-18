import * as indexResolver from './config/resolver';

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import helmet from 'helmet';
import indexSchema from './config/schema';

dotenv.config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// enable CORS for browser clients
server.use(cors());
server.options('*', cors);

// add necessary headers
server.use(helmet());

// mount graphql route
server.use(
  '/graphql',
  graphqlHTTP({
    schema: indexSchema,
    rootValue: indexResolver,
    graphiql: true
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
    graphiql: true
  })
);
