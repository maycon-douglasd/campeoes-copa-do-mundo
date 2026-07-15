import express from 'express';
import cors from 'cors';
import pool from './servico/conexao.js';
import { retornaCopas, retornaCopasID, retornaCopasAno, retornaCopasTime } from './servico/retornaCopas_servico.js';

const app = express();

app.use(cors());

app.use((req, res, next) => {
    console.log('Middleware executado');
    next();
});

app.get('/copas', async (req, res) => {

    let copas;

    const ano = req.query.ano;
    const time = req.query.time;

    if (time) {
        copas = await retornaCopasTime(time);

    } else if (ano) {
        copas = await retornaCopasAno(ano);

    } else {
        copas = await retornaCopas();
    }

    res.json(copas);

});

app.get('/copas/:id', async (req, res) =>{
    const id = req.params.id;
    const copas = await retornaCopasID(id);

    if (copas.length > 0) {
        res.json(copas);
    } else {
        res.status(404).json({ error: 'Copa não encontrada' });
    }
});

app.listen(9000, async () => {

    const data = new Date();

    console.log("Servidor Node iniciado em: " + data);

    const conexao = await pool.getConnection();

    console.log("Banco conectado!");
    console.log("Thread:", conexao.threadId);

    conexao.release();

});