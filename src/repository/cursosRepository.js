import e from 'express';
import con from './connection.js';

export async function inserirCurso(curso) {
    const comando = `
        INSERT INTO db_appfrei.tb_cursos (nm_curso, tp_curso, qt_carga_horaria, ds_curso, nr_idade_minima, nr_idade_maxima, ds_escolaridade_min, vl_contribuicao, lk_video_apresenta, im_curso)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [curso.nome, curso.tipo, curso.cargaHoraria, curso.descricao, curso.idadeMinima, curso.idadeMaxima, curso.escolaridadeMinima, curso.contribuicao, curso.videoApresentacao, curso.imagem]);
    let info = resposta[0]; 
    
    return info.insertId;
}


export async function consultarCursos() {
    const comando = `
        SELECT 
                id_curso                id,
                nm_curso                nome,
                tp_curso                tipo,
                qt_carga_horaria        cargaHoraria,
                ds_curso                descricao,
                nr_idade_minima         idadeMinima,
                nr_idade_maxima         idadeMaxima,
                ds_escolaridade_min     escolaridadeMinima,
                vl_contribuicao         contribuicao,
                lk_video_apresenta      videoApresentacao,
                im_curso                imagem
        FROM 
                db_appfrei.tb_cursos
    `;
    
    let resposta = await con.query(comando);
    let registros = resposta[0]; 
    
    return registros;
}

export async function consultarCursoId(id) {
    const comando = `
        SELECT 
                id_curso                id,
                nm_curso                nome,
                tp_curso                tipo,
                qt_carga_horaria        cargaHoraria,
                ds_curso                descricao,
                nr_idade_minima         idadeMinima,
                nr_idade_maxima         idadeMaxima,
                ds_escolaridade_min     escolaridadeMinima,
                vl_contribuicao         contribuicao,
                lk_video_apresenta      videoApresentacao,
                im_curso                imagem
        FROM 
                db_appfrei.tb_cursos    
        WHERE
                id_curso = ?
    `;
    
    let resposta = await con.query(comando, [id]);
    let registros = resposta[0][0]; 
    
    if (registros && registros.imagem) {
        registros.imagem = registros.imagem.toString();
    }    
    
    return registros;
}

export async function alterarCurso(curso, id) {
    const comando = `
        UPDATE 
                db_appfrei.tb_cursos
        SET 
                nm_curso              = ?,
                tp_curso              = ?,
                qt_carga_horaria      = ?,
                ds_curso              = ?,
                nr_idade_minima       = ?,
                nr_idade_maxima       = ?,
                ds_escolaridade_min   = ?,
                vl_contribuicao       = ?,
                lk_video_apresenta    = ?,
                im_curso              = ?
        WHERE 
                id_curso              = ?
    `;
    
    let resposta = await con.query(comando, [curso.nome, curso.tipo, curso.cargaHoraria, curso.descricao, curso.idadeMinima, curso.idadeMaxima, curso.escolaridadeMinima, curso.contribuicao, curso.videoApresentacao, curso.imagem, id]);
    let info = resposta[0]; 
    
    return info.affectedRows;
}

export async function deletarCurso(id) {
    const comando = `
        DELETE FROM 
                db_appfrei.tb_cursos
        WHERE 
                id_curso = ?
    `;
    
    let resposta = await con.query(comando, [id]);
    let info = resposta[0]; 
    
    return info.affectedRows;
}

export async function consultarCursosTipo(tipo) {
    const comando = `
        SELECT 
                id_curso                id,
                nm_curso                nome,
                tp_curso                tipo,
                qt_carga_horaria        cargaHoraria,
                ds_curso                descricao,
                nr_idade_minima         idadeMinima,
                nr_idade_maxima         idadeMaxima,
                ds_escolaridade_min     escolaridadeMinima,
                vl_contribuicao         contribuicao,
                lk_video_apresenta      videoApresentacao,
                im_curso                imagem
        FROM 
                db_appfrei.tb_cursos
        WHERE 
                tp_curso = ?
    `;
    
    let resposta = await con.query(comando, [tipo]);
    let registros = resposta[0]; 
    
    return registros;
}