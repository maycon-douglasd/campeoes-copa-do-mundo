import pool from './conexao.js';

async function executaQuery(sql) {
    const conexao = await pool.getConnection();

    const copas_tb = await conexao.query(sql);

    const copas = copas_tb[0];

    conexao.release();

    return copas;
}

async function retornaCopas() {
   const sql = 'SELECT * FROM copas';

    return await executaQuery(sql);
}

async function retornaCopasID(id) {
   const sql = 'SELECT * FROM copas WHERE id = ' + id;

    return await executaQuery(sql);
}

async function retornaCopasAno(ano) {
    const sql = 'SELECT * FROM copas WHERE ano = ' + ano;

    return await executaQuery(sql);
}

async function retornaCopasTime(time) {
    const sql = "SELECT id, campeao, vice, ano FROM copas WHERE campeao = '" + time + "'";

    return await executaQuery(sql);
}

export { 
    retornaCopas,
    retornaCopasID,
    retornaCopasAno,
    retornaCopasTime
};