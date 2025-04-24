import { Router } from 'express';
import * as sv from '../service/cursosService.js';

const endpoints = Router();

endpoints.post('/cursos', async (req, resp) => {
    try {
        let curso = req.body;
        let id = await sv.inserirService(curso);

        resp.send({
            novoId: id
        });
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/cursos', async (req, resp) => {
    try {
        let tipo = req.query.tipo;
        let registros = [];

        if (!tipo) {
            registros = await sv.consultarService();
        }
        else {
            registros = await sv.consultarServiceTipo(tipo);
        }

        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/cursos/:id', async (req, resp) => {
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

endpoints.put('/cursos/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let curso = req.body;

        let linhasAfetadas = await sv.alterarService(curso, id);

        if (linhasAfetadas >= 1) {
            resp.send();
        } else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' });
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/cursos/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let linhasAfetadas = await sv.deletarService(id);

        if (linhasAfetadas >= 1) {
            resp.send();
        } else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' });
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;