import { Router } from 'express';
import * as db from '../service/cadastroService.js';

const endpoints = Router();

endpoints.post('/cadastro', async (req, resp) => {
    try {
        let cadastro = req.body;

        let id = await db.inserirService(cadastro);
        resp.send({
            novoId: id
        })

    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/cadastro', async (req, resp) => {
    try {
        let registros = await db.consultarService();
        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/cadastro/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let registros = await db.consultarServiceId(id);
        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/cadastro/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let cadastro = req.body;

        let linhasAfetadas = await db.alterarService(id, cadastro);
        resp.send(linhasAfetadas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/cadastro/:id', async (req, resp) => {

    try {
        let id = req.params.id;

        let linhasAfetadas = await db.deletarService(id);
        resp.send(linhasAfetadas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

export default endpoints;