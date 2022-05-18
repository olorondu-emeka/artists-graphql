import { createQueryBuilder } from './db/database';
import { initiateQueryBuilder } from './artists/artist.repo';
import server from './server';

const queryBuilder = createQueryBuilder();
initiateQueryBuilder(queryBuilder);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`GraphQL server is running on port ${port}.`);
});
