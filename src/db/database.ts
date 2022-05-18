import { Knex, knex } from 'knex';

export function createQueryBuilder(): Knex {
  const config: Knex.Config = {
    client: 'sqlite3',
    connection: {
      filename: './database.db'
    }
  };

  return knex(config);
}
