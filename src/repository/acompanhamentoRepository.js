import con from './connection.js';

export async function inserirAcompanhamento(acompanhamento) {
    const comando = `
        INSERT INTO db_appfrei.tb_acompanhamento (op_primeira, op_segunda, cd_verificacao, bl_pre_inscrito, bl_taxa_paga, bl_aluno_aprovado, dt_pagamento, id_pre_inscricao)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [acompanhamento.primeiraOpcao, acompanhamento.segundaOpcao, acompanhamento.codigoVerificacao, acompanhamento.preInscrito, acompanhamento.taxaPaga, acompanhamento.alunoAprovado, acompanhamento.dataPagamento, acompanhamento.idPreInscricao]);
    let registros = resposta[0];

    return registros.insertId;
}

export async function consultarAcompanhamento() {
    const comando = `
        SELECT 
                id_acompanhamento   id,
                op_primeira         primeiraOpcao,
                op_segunda          segundaOpcao,
                cd_verificacao      codigoVerificacao,
                bl_pre_inscrito     preInscrito,
                bl_taxa_paga        taxaPaga,
                bl_aluno_aprovado   alunoAprovado,
                dt_pagamento        dataPagamento,
                id_pre_inscricao    idPreInscricao
          FROM 
                db_appfrei.tb_acompanhamento
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarAcompanhamentoId(id) {
    const comando = `
        SELECT 
                id_acompanhamento   id,
                op_primeira         primeiraOpcao,
                op_segunda          segundaOpcao,
                cd_verificacao      codigoVerificacao,
                bl_pre_inscrito     preInscrito,
                bl_taxa_paga        taxaPaga,
                bl_aluno_aprovado   alunoAprovado,
                dt_pagamento        dataPagamento,
                id_pre_inscricao    idPreInscricao
          FROM 
                db_appfrei.tb_acompanhamento
         WHERE 
                id_acompanhamento = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0][0];

    return registros;
}

export async function alterarAcompanhamento(acompanhamento, id) {
    const comando = `
        UPDATE 
                db_appfrei.tb_acompanhamento
           SET
                op_primeira         = ?,
                op_segunda          = ?,
                cd_verificacao      = ?,
                bl_pre_inscrito     = ?,
                bl_taxa_paga        = ?,
                bl_aluno_aprovado   = ?,
                dt_pagamento        = ?,
                id_pre_inscricao    = ?
         WHERE 
                id_acompanhamento   = ?
    `;

    let resposta = await con.query(comando, [acompanhamento.primeiraOpcao, acompanhamento.segundaOpcao, acompanhamento.codigoVerificacao, acompanhamento.preInscrito, acompanhamento.taxaPaga, acompanhamento.alunoAprovado, acompanhamento.dataPagamento, acompanhamento.idPreInscricao, id]);
    let registros = resposta[0];

    return registros.affectedRows;
}

export async function deletarAcompanhamento(id) {
    const comando = `
        DELETE FROM 
                db_appfrei.tb_acompanhamento
        WHERE 
                id_acompanhamento = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros.affectedRows;
}