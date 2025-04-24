import * as db from '../repository/faqRepository.js';
import * as vl from '../validation/faq/faqValidation.js';

export async function inserirService(faq) {
    vl.inserirValidation(faq);
    
    let id = await db.inserirFaq(faq);
    return id;
}

export async function consultarService() {
    let registros = await db.consultarFaq();
    if (!registros || (Array.isArray(registros) && registros.length === 0)) throw new Error('Nenhum registro encontrado');
    
    return registros;
}

export async function consultarServiceId(id) {
    vl.IdValidation(id);
    
    let registros = await db.consultarFaqId(id);
    if (!registros) throw new Error('Nenhum registro encontrado com o ID informado');

    return registros;
}

export async function alterarService(faq, id) {
    vl.inserirValidation(faq);
    vl.IdValidation(id);
    
    let linhasAfetadas = await db.alterarFaq(faq, id);
    return linhasAfetadas;
}

export async function deletarService(id) {
    vl.IdValidation(id);
    
    let linhasAfetadas = await db.deletarFaq(id);
    return linhasAfetadas;
}