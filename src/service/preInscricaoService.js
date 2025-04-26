import * as db from '../repository/preInscricaoRepository.js';
import * as vl from '../validation/preInscricao/preInscricaoValidation.js';

export async function inserirService(inscricao){
    vl.inserirValidation(inscricao);

    let id = await db.inserirPreInscricao(inscricao);
    return id;
}

export async function consultarService() {
    let registros = await db.consultarPreInscricao();
    if (!registros || (Array.isArray(registros) && registros.length === 0)) throw new Error('Nenhum registro encontrado');

    return registros;
}

export async function consultarServiceId(id){
    vl.IdValidation(id);

    let registros = await db.consultarPreInscricaoId(id);
    if (!registros) throw new Error('Nenhum registro encontrado com o ID informado');
    
    return registros;
}

export async function alterarService(id, inscricao) {
    vl.IdValidation(id);
    vl.inserirValidation(inscricao);

    let linhasAfetadas = await db.alterarPreInscricao(id, inscricao);
    return linhasAfetadas;
}

export async function alterarService(cpf, confirmado) {
    vl.cpfValidation(cpf);
    vl.confirmadoValidation(confirmado);

    let linhasAfetadas = await db.alterarConfirmacaoInscricao(cpf, confirmado);
    return linhasAfetadas;
}

export async function deletarService(id){
    vl.IdValidation(id);

    let linhasAfetadas = await db.removerPreInscricao(id);
    return linhasAfetadas;
}