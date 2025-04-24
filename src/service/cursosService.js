import * as bd from '../repository/cursosRepository.js';
import * as vl from '../validation/cursos/cursosValidation.js';

export async function inserirService(curso) {
    vl.inserirValidation(curso);
    
    let id = await bd.inserirCurso(curso);
    return id;
}

export async function consultarService() {
    let registros = await bd.consultarCursos();
    if (!registros || (Array.isArray(registros) && registros.length === 0)) throw new Error('Nenhum curso encontrado');

    return registros;
}

export async function consultarServiceId(id) {
    vl.idValidation(id);
    
    let registros = await bd.consultarCursoId(id);
    if (!registros) throw new Error('Nenhum curso encontrado com o ID informado');

    return registros;
}

export async function alterarService(curso, id) {
    vl.idValidation(id);
    vl.inserirValidation(curso);
    
    let linhasAfetadas = await bd.alterarCurso(curso, id);
    return linhasAfetadas;
}

export async function deletarService(id) {
    vl.idValidation(id);
    
    let linhasAfetadas = await bd.deletarCurso(id);
    return linhasAfetadas;
}

export async function consultarServiceTipo(tipo) {
    vl.tipoValidation(tipo);

    let registros = await bd.consultarCursosTipo(tipo);
    if (!registros || (Array.isArray(registros) && registros.length === 0)) throw new Error('Nenhum curso encontrado com o tipo informado');

    return registros;
}