const { Client } = require('pg');
const { getDatabaseURI } = require('./config')

require('colors')

const db = new Client({ connectionString:getDatabaseURI() })

db.connect((err) => {
if (err) {
    console.error('Connection error'.red, err.stack);
    } else {
    console.log('Successfully connected to postgres db!'.blue);
    }
});

module.exports = db;
