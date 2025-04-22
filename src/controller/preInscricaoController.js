import { Router } from 'express';
import * as db from '../service/preInscricaoService.js';

const endpoints = Router();

endpoints.post('/preInscricao', async (req, resp) => {
    try {
        let inscricao = req.body;

        let id = await db.inserirService(inscricao);
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

endpoints.get('/preInscricao', async (req, resp) => {
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

endpoints.get('/preInscricao/:id', async (req, resp) => {
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

endpoints.put('/preInscricao/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let inscricao = req.body;

        let linhasAfetadas = await db.alterarService(id, inscricao);
        
        if (linhasAfetadas >= 1){
            resp.send();
        } else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado'});
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/preInscricao/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.deletarService(id);
        
        if (linhasAfetadas >= 1){
            resp.send();
        } else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado'});
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

export default endpoints;