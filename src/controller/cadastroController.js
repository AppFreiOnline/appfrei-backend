import { Router } from 'express';
import * as sv from '../service/cadastroService.js';

const endpoints = Router();

endpoints.post('/cadastro', async (req, resp) => {
    try {
        let cadastro = req.body;
        let id = await sv.inserirService(cadastro);

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
        let registros = await sv.consultarService();

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

        let registros = await sv.consultarServiceId(id);
        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/cadastro/:cpf', async (req, resp) => {
    try {
        let cpf = req.params.cpf;

        let registros = await sv.consultarServiceCpf(cpf);
        resp.send(registros);
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

        let linhasAfetadas = await sv.alterarService(id, cadastro);

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

endpoints.put('/cadastro/senha/:cpf', async (req, resp) => {
    try {
        let cpf = req.params.cpf;
        let senha = req.body.senha;

        let linhasAfetadas = await sv.alterarServiceSenha(cpf, senha);

        if (linhasAfetadas >= 1) {
            resp.send(linhasAfetadas);
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

endpoints.put('/cadastro/email/:cpf', async (req, resp) => {
    try {
        let cpf = req.params.cpf;
        let email = req.body.email;

        let linhasAfetadas = await sv.alterarServiceEmail(cpf, email);

        if (linhasAfetadas >= 1) {
            resp.send(linhasAfetadas);
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

endpoints.delete('/cadastro/:id', async (req, resp) => {
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