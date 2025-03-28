import { Knex, knex as setupKnex } from 'knex'
import { envVariables } from './env'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: envVariables.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
