import con from './connection.js';

export async function inserirAcompanhamento(acompanhamento) {
    let comando = `
        INSERT INTO db_appfrei.tb_acompanhamento (pr_opcao, sg_opcao, cod_verificacao, pre_inscrito, taxa_paga, aluno_aprovado, dt_pagamento, id_preInscricao)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `

    let resposta = await con.query(comando, [acompanhamento.primeiraOpcao, acompanhamento.segundaOpcao, acompanhamento.codigoVerificacao, acompanhamento.preInscrito, acompanhamento.taxaPaga, acompanhamento.aprovado, acompanhamento.dataPagamento, acompanhamento.idPreInscricao]);
    let registros = resposta[0];
    
    return registros
}