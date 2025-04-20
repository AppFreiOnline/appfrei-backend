import con from './connection.js';

export async function inserirPreInscricao(inscricao){
    let comando = `
    insert into tb_preInscricao(nm_aluno, email_aluno, tel_aluno, dt_nascimento, sx_aluno, cpf_aluno, cm_conheceu, renda, qtd_pessoas, escolaridade, tp_escola, nm_escola, pr_opcao, sg_opcao, confirmado, cod_verificacao, id_cadastro)
                         values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [inscricao.nome, inscricao.email, inscricao.telefone, inscricao.nascimento, inscricao.sexo, inscricao.cpf, inscricao.conheceu, inscricao.renda, inscricao.pessoas, inscricao.escolaridade, inscricao.tipoEscola, inscricao.nomeEscola, inscricao.primeiraOpcao, inscricao.segundaOpcao, inscricao.confirmado, inscricao.codigo, inscricao.idCadastro]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarPreInscricao(){
    let comando = `
    select id           id,
    nm_aluno            aluno,
    tel_aluno           telefone,
    dt_nascimento       nascimento,
    sx_aluno            sexo,
    cpf_aluno           cpf,
    cm_conheceu         conheceu,
    renda               renda,
    qtd_pessoas         pessoas,
    escolaridade        escolaridade,
    tp_escola           tipoEscola,
    nm_escola           nomeEscola,
    pr_opcao            primeiraOpcao,
    sg_opcao            segundaOpcao,
    confirmado          inscricaoConfirmada,
    cod_verificacao     codigo,
    id_cadastro         idCadastro

    from tb_preInscricao;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarPreInscricao(id, inscricao){
    let comando = `
    update tb_preInscricao
    set nm_aluno = ?,
    tel_aluno = ?,
    dt_nascimento = ?,
    sx_aluno = ?,
    cpf_aluno = ?,
    cm_conheceu = ?,
    renda = ?,
    qtd_pessoas = ?,
    escolaridade = ?,
    tp_escola = ?,
    nm_escola = ?,
    pr_opcao  = ?,
    sg_opcao  = ?,
    confirmado = ?,
    cod_verificacao = ?,
    id_cadastro = ?

    where id = ?;
    `;

    let resposta = await con.query(comando, [inscricao.nome, inscricao.email, inscricao.telefone, inscricao.nascimento, inscricao.sexo, inscricao.cpf, inscricao.conheceu, inscricao.renda, inscricao.pessoas, inscricao.escolaridade, inscricao.tipoEscola, inscricao.nomeEscola, inscricao.primeiraOpcao, inscricao.segundaOpcao, inscricao.confirmado, inscricao.codigo, inscricao.idCadastro, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function removerPreInscricao(id) {
    let comando = `
    delete from tb_preInscricao
    where id = ?
    `
    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}