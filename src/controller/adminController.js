import { Router } from 'express';
import * as sv from '../service/adminService.js';
import { gerarToken } from "../utils/jwt.js";

const endpoints = Router();

endpoints.post('/admin', async (req, resp) => {
    try {
        let admin = req.body;
        let id = await sv.inserirService(admin);

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

endpoints.post('/entrar', async (req, resp) => {
    try {
        let admin = req.body;
        let usuario = await sv.verificarService(admin);

        if (!usuario) {
            resp.send({ erro: "Usuário ou senha incorreto(s)" })
        }
        else {
            let token = gerarToken(usuario);
            resp.send({
                "token": token
            })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/admin', async (req, resp) => {
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

endpoints.put('/admin/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let admin = req.body;

        let linhasAfetadas = await sv.alterarService(id, admin);

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

endpoints.delete('/admin/:id', async (req, resp) => {
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