import * as db from '../repository/preInscricaoRepository.js';
import * as vl from '../validation/preInscricao/preInscricaoValidation.js';

export async function inserirService(inscricao){
    vl.inserirValidation(inscricao);

    let id = await db.inserirPreInscricao(inscricao);
    return id;
}

export async function consultarService() {
    let registros = await db.consultarPreInscricao();
    return registros;
}

export async function consultarServiceId(id){
    vl.IdValidation(id);

    let registros = await db.consultarPreInscricaoId(id);
    return registros;
}

export async function alterarService(id, inscricao) {
    vl.IdValidation(id);
    vl.inserirValidation(inscricao);

    let linhasAfetadas = await db.alterarPreInscricao(id, inscricao);
    return linhasAfetadas;
}

export async function deletarService(id){
    vl.IdValidation(id);

    let linhasAfetadas = await db.removerPreInscricao(id);
    return linhasAfetadas;
}