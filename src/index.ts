import { createQueryBuilder } from './db/database';
import { initiateQueryBuilder } from './artists/artist.repo';
// import { graphqlYoga, PubSub } from "graphql-yoga"
import server from './server';
// import './server';


const queryBuilder = createQueryBuilder();
initiateQueryBuilder(queryBuilder);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`GraphQL server is running on port ${port}.`);
});
