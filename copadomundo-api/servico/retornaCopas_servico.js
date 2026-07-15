import pool from './conexao.js';

async function executaQuery(sql, params = []) {
    const resultado = await pool.query(sql, params);
    return resultado.rows;
}

async function retornaCopas() {
    const sql = 'SELECT * FROM copa';
    return await executaQuery(sql);
}

async function retornaCopasID(id) {
    const sql = 'SELECT * FROM copa WHERE id = $1';
    return await executaQuery(sql, [id]);
}

async function retornaCopasAno(ano) {
    const sql = 'SELECT * FROM copa WHERE ano = $1';
    return await executaQuery(sql, [ano]);
}

async function retornaCopasTime(time) {
    const sql = 'SELECT id, campeao, vice, ano FROM copa WHERE campeao = $1';
    return await executaQuery(sql, [time]);
}

export {
    retornaCopas,
    retornaCopasID,
    retornaCopasAno,
    retornaCopasTime
};