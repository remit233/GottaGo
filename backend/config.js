require('dotenv').config()
require('colors')

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const BCRYPT_WORK_FACTOR = parseInt(process.env.BCRYPT_WORK_FACTOR) || 13;
const SECRET_KEY = process.env.SECRET_KEY || 'supersecretkey';

function getDatabaseURI() {
    const dbUser = process.env.DATABASE_USER || 'postgres';
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : 'postgres';
    const dbHost = process.env.DATABASE_HOST || 'localhost';
    const dbPort = process.env.DATABASE_PORT || 5432;
    const dbName = process.env.DATABASE_NAME || 'gotta_go'
    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}

console.log('App Config:'.red)
console.log('PORT:'.blue, PORT)
console.log('KEY:'.blue, SECRET_KEY)
console.log('Database URI:'.blue, getDatabaseURI())
console.log('---')

module.exports = {
  PORT,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
  getDatabaseURI,
}
