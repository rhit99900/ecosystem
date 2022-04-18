import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../.env'})

console.log(__dirname + '/../.env', process.env)

export default () => ({
  PORT: process.env.PORT || 3000,
  DATABASE: {
    URI: process.env.DB_CONNECTION_STRING,
  }
})