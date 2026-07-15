import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host : 'localhost',
    user : 'usuariocopadomundo',
    password : 'senhacopa',
    database : 'copadomundo'
});

export default pool;