import * as db from '../repository/adminRepository.js';
import * as vl from '../validation/admin/adminValidation.js';

export async function inserirService(admin) {
    vl.inserirValidation(admin);
    vl.emailValidation(admin.email);
    vl.senhaValidation(admin.senha);

    let id = await db.inserirAdmin(admin);
    return id;
}

export async function consultarService() {
    let registros = await db.consultarAdmin();
    if (!registros || (Array.isArray(registros) && registros.length === 0)) throw new Error('Nenhum admin encontrado');

    return registros;
}

export async function consultarServiceId(id) {
    vl.IdValidation(id);

    let registros = await db.consultarAdminId(id);
    if (!registros) throw new Error('Nenhum registro encontrado com o ID informado');
    return registros;
}

export async function verificarService(admin) {
    vl.verificarValidation(admin);

    let registros = await db.verificarAdmin(admin);
    if (!registros || (Array.isArray(registros) && registros.length === 0)) throw new Error('Nenhum admin encontrado');

    return registros;
}

export async function alterarService(id, admin) {
    vl.IdValidation(id);
    vl.inserirValidation(admin);
    vl.emailValidation(admin.email);
    vl.senhaValidation(admin.senha);

    let linhasAfetadas = await db.alterarAdmin(id, admin);
    return linhasAfetadas;
}

export async function deletarService(id) {
    vl.IdValidation(id);

    let linhasAfetadas = await db.deletarAdmin(id);
    return linhasAfetadas;
}