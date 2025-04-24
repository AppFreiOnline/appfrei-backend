import * as db from '../repository/acompanhamentoRepository.js';
import * as vl from '../validation/acompanhamento/acompanhamentoValidation.js';

export async function inserirService(acompanhamento) {
    vl.inserirValidation(acompanhamento);

    let id = await db.inserirAcompanhamento(acompanhamento)
    return id;
}

export async function consultarService() {
    let registros = await db.consultarAcompanhamento();
    if (!registros || (Array.isArray(registros) && registros.length === 0)) throw new Error('Nenhum registro encontrado');

    return registros;
}

export async function consultarServiceId(id) {
    vl.validarId(id);

    let registros = await db.consultarAcompanhamentoId(id);
    if (!registros) throw new Error('Nenhum registro encontrado com o ID informado');
    
    return registros;
}

export async function alterarService(acompanhamento, id) {
    vl.validarId(id);
    vl.inserirValidation(acompanhamento);

    let linhasAfetadas = await db.alterarAcompanhamento(acompanhamento, id);
    return linhasAfetadas;
}

export async function deletarService(id) {
    vl.validarId(id);

    let linhasAfetadas = await db.deletarAcompanhamento(id);
    return linhasAfetadas;
}