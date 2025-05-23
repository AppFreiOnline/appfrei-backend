import * as db from '../repository/cadastroRepository.js';
import * as vl from '../validation/cadastro/cadastroValidation.js';

export async function inserirService(cadastro) {
    vl.inserirValidation(cadastro);
    vl.cpfValidation(cadastro.cpf);
    vl.emailValidation(cadastro.email);
    vl.senhaValidation(cadastro.senha);

    let id = await db.inserirCadastro(cadastro);
    return id;
}

export async function consultarService() {
    let registros = await db.consultarCadastro();
    if (!registros || (Array.isArray(registros) && registros.length === 0)) throw new Error('Nenhum cadastro encontrado');

    return registros;
}

export async function consultarServiceId(id) {
    vl.IdValidation(id);

    let registros = await db.consultarCadastroId(id);
    if (!registros) throw new Error('Nenhum registro encontrado com o ID informado');
    return registros;
}

export async function consultarServiceCpf(cpf) {
    vl.cpfValidation(cpf);

    let registros = await db.consultarCadastroCpf(cpf);
    if (!registros) throw new Error('Nenhum registro encontrado com o CPF informado');
    return registros;
}

export async function alterarService(id, cadastro) {
    vl.IdValidation(id);
    vl.inserirValidation(cadastro);
    vl.emailValidation(cadastro.email);
    vl.senhaValidation(cadastro.senha);
    

    let linhasAfetadas = await db.alterarCadastro(id, cadastro);
    return linhasAfetadas;
}

export async function alterarServiceSenha(cpf, senha) {
    vl.cpfValidation(cpf);
    vl.senhaValidation(senha);

    let linhasAfetadas = await db.alterarSenhaCadastro(cpf, senha);
    return linhasAfetadas;
}

export async function alterarServiceEmail(cpf, email) {
    vl.cpfValidation(cpf);
    vl.emailValidation(email);

    let linhasAfetadas = await db.alterarEmailCadastro(cpf, email);
    return linhasAfetadas;
}

export async function deletarService(id) {
    vl.IdValidation(id);

    let linhasAfetadas = await db.deletarCadastro(id);
    return linhasAfetadas;
}