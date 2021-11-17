const pgp = require('pg-promise')();
const cn = {
    user: 'postgres',
    host: 'localhost',
    database: 'controle_estoque',
    password: 'postgres',
    port: 5432,
    max: 10

}

const db = pgp(cn);
module.exports = db;