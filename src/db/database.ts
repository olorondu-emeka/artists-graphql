import { Knex, knex } from 'knex';

import path from 'path';

export function createQueryBuilder(): Knex {
  const config: Knex.Config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: path.join(__dirname, './database.db')
    }
  };

  return knex(config);
}
