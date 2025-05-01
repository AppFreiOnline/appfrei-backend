import { Router } from 'express';
import * as sv from '../service/faqService.js';
import { autenticar } from '../utils/jwt.js';

const endpoints = Router();

endpoints.post('/faq', autenticar, async (req, resp) => {
    try {
        let faq = req.body;
        let id = await sv.inserirService(faq);

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
        let registros = await sv.consultarService();

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
        let registros = await sv.consultarServiceId(id);
        
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/faq/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let faq = req.body;

        let linhasAfetadas = await sv.alterarService(faq, id);

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

endpoints.delete('/faq/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await sv.deletarService(id);

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