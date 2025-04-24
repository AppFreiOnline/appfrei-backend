import * as db from '../repository/cadastroRepository.js';
import * as vl from '../validation/cadastro/cadastroValidation.js';

export async function inserirService(cadastro) {
    vl.inserirValidation(cadastro);

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

export async function alterarService(id, cadastro) {
    vl.IdValidation(id);
    vl.inserirValidation(cadastro);

    let linhasAfetadas = await db.alterarCadastro(id, cadastro);
    return linhasAfetadas;
}

export async function deletarService(id) {
    vl.IdValidation(id);

    let linhasAfetadas = await db.deletarCadastro(id);
    return linhasAfetadas;
}