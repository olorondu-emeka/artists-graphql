import app from './app';
import { createQueryBuilder } from './db/database';
import { createServer } from 'http';
import { initiateQueryBuilder } from './artists/artist.repo';
import schema from './config/schema';
import { useServer } from 'graphql-ws/lib/use/ws';
import ws from 'ws';

const WebSocketServer = ws.Server;

const port = process.env.PORT || 4000;
const httpServer = createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql'
});

useServer({ schema }, wsServer);

const queryBuilder = createQueryBuilder();
initiateQueryBuilder(queryBuilder);

httpServer.listen(port, () => {
  console.log(`GraphQL server is running on port ${port}.`);
});
