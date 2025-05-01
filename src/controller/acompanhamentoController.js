import { Router } from 'express';
import * as sv from '../service/acompanhamentoService.js';
import { autenticar } from '../utils/jwt.js';

const endpoints = Router();

endpoints.post('/acompanhamento', autenticar, async (req, resp) => {
    try {
        let acompanhamento = req.body;
        
        let id = await sv.inserirService(acompanhamento);
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

endpoints.get('/acompanhamento', async (req, resp) => {
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

endpoints.get('/acompanhamento/:id', async (req, resp) => {
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

endpoints.put('/acompanhamento/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let acompanhamento = req.body;

        let linhasAfetadas = await sv.alterarService(acompanhamento, id);

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

endpoints.delete('/acompanhamento/:id', autenticar, async (req, resp) => {
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