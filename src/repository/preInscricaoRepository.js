import con from './connection.js';

export async function inserirPreInscricao(inscricao) {
    const comando = `
        INSERT INTO db_appfrei.tb_pre_inscricao (nm_aluno, em_aluno, nr_tel_aluno, dt_nascimento_aluno, sx_aluno, nr_cpf_aluno, cm_conheceu, vl_renda_familiar, qt_pessoas_residencia, ds_escolaridade, tp_escola, nm_escola, op_primeira, op_segunda, bl_confirmado, cd_verificacao, id_cadastro)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [inscricao.nome, inscricao.email, inscricao.telefone, inscricao.nascimento, inscricao.sexo, inscricao.cpf, inscricao.conheceu, inscricao.renda, inscricao.pessoas, inscricao.escolaridade, inscricao.tipoEscola, inscricao.nomeEscola, inscricao.primeiraOpcao, inscricao.segundaOpcao, inscricao.confirmado, inscricao.codigo, inscricao.idCadastro]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarPreInscricao() {
    const comando = `
        SELECT 
                id_pre_inscricao            id,
                nm_aluno                    nome,
                em_aluno                    email,
                nr_tel_aluno                telefone,
                dt_nascimento_aluno         nascimento,
                sx_aluno                    sexo,
                nr_cpf_aluno                cpf,
                cm_conheceu                 conheceu,
                vl_renda_familiar           renda,
                qt_pessoas_residencia       pessoas,
                ds_escolaridade             escolaridade,
                tp_escola                   tipoEscola,
                nm_escola                   nomeEscola,
                op_primeira                 primeiraOpcao,
                op_segunda                  segundaOpcao,
                bl_confirmado               confirmado,
                cd_verificacao              codigo,
                id_cadastro                 idCadastro
        FROM
                db_appfrei.tb_pre_inscricao
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarPreInscricaoId(id) {
    const comando = `
        SELECT 
                id_pre_inscricao            id,
                nm_aluno                    nome,
                em_aluno                    email,
                nr_tel_aluno                telefone,
                dt_nascimento_aluno         nascimento,
                sx_aluno                    sexo,
                nr_cpf_aluno                cpf,
                cm_conheceu                 conheceu,
                vl_renda_familiar           renda,
                qt_pessoas_residencia       pessoas,
                ds_escolaridade             escolaridade,
                tp_escola                   tipoEscola,
                nm_escola                   nomeEscola,
                op_primeira                 primeiraOpcao,
                op_segunda                  segundaOpcao,
                bl_confirmado               confirmado,
                cd_verificacao              codigo,
                id_cadastro                 idCadastro
        FROM 
                db_appfrei.tb_pre_inscricao

        WHERE  
                id_pre_inscricao = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0][0];

    return registros;
}

export async function alterarPreInscricao(id, inscricao) {
    const comando = `
        UPDATE 
                db_appfrei.tb_pre_inscricao
        SET 
                nm_aluno               = ?,
                em_aluno               = ?,
                nr_tel_aluno           = ?,
                dt_nascimento_aluno    = ?,
                sx_aluno               = ?,
                nr_cpf_aluno           = ?,
                cm_conheceu            = ?,
                vl_renda_familiar      = ?,
                qt_pessoas_residencia  = ?,
                ds_escolaridade        = ?,
                tp_escola              = ?,
                nm_escola              = ?,
                op_primeira            = ?,
                op_segunda             = ?,
                bl_confirmado          = ?,
                cd_verificacao         = ?,
                id_cadastro            = ?
        WHERE 
                id_pre_inscricao       = ?;
    `;

    let resposta = await con.query(comando, [inscricao.nome, inscricao.email, inscricao.telefone, inscricao.nascimento, inscricao.sexo, inscricao.cpf, inscricao.conheceu, inscricao.renda, inscricao.pessoas, inscricao.escolaridade, inscricao.tipoEscola, inscricao.nomeEscola, inscricao.primeiraOpcao, inscricao.segundaOpcao, inscricao.confirmado, inscricao.codigo, inscricao.idCadastro, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function alterarConfirmacaoInscricao(cpf, confirmado) {
    const comando = `
        UPDATE
                db_appfrei.tb_pre_inscricao
        SET
                bl_confirmado = ?
        WHERE
                nr_cpf_aluno = ?
    `;

    let resposta = await con.query(comando, [confirmado, cpf]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function removerPreInscricao(id) {
    const comando = `
        DELETE FROM 
                db_appfrei.tb_pre_inscricao
        WHERE 
                id_pre_inscricao = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}