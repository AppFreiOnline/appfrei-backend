import { Router } from 'express';
import * as sv from '../service/preInscricaoService.js';

const endpoints = Router();

endpoints.post('/preInscricao', async (req, resp) => {
    try {
        let inscricao = req.body;
        let id = await sv.inserirService(inscricao);
        
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
        let registros = await sv.consultarService();
        
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

        let registros = await sv.consultarServiceId(id);
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

        let linhasAfetadas = await sv.alterarService(id, inscricao);
        
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

endpoints.put('/preInscricao/confirmado/:cpf', async (req, resp) => {
    try {
        let cpf = req.params.cpf;
        let confirmado = req.body.confirmado;

        let linhasAfetadas = await sv.alterarServiceConfirmado(cpf, confirmado);
        
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