import { Router } from 'express';
import * as db from '../service/faqService.js';

const endpoints = Router();

endpoints.post('/faq', async (req, resp) => {
    try {
        let faq = req.body;

        let id = await db.inserirService(faq);
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

endpoints.get('/faq', async (req, resp) => {
    try {

        let registros = await db.consultarService();
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/faq/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let registros = await db.consultarServiceId(id);
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/faq/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let faq = req.body;

        let linhasAfetadas = await db.alterarService(faq, id);

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

endpoints.delete('/faq/:id', async (req, resp) => {
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