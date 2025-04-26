import con from './connection.js';

export async function inserirCadastro(cadastro) {
    const comando = `
        INSERT INTO db_appfrei.tb_cadastro(nm_usuario, sb_usuario, nr_cpf_usuario, em_usuario, dt_nascimento, ds_senha)
        VALUES (?, ?, ?, ?, ?, ?);
    `;

    let resposta = await con.query(comando, [cadastro.nome, cadastro.sobrenome, cadastro.cpf, cadastro.email, cadastro.nascimento, cadastro.senha]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarCadastro() {
    const comando = `
        SELECT 
                id_cadastro      id,
                nm_usuario       nome,
                sb_usuario       sobrenome,
                nr_cpf_usuario   cpf,
                em_usuario       email,
                dt_nascimento    nascimento,
                ds_senha         senha
        FROM    
                db_appfrei.tb_cadastro;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros

}

export async function consultarCadastroId(id) {
    const comando = `
        SELECT 
                id_cadastro      id,
                nm_usuario       nome,
                sb_usuario       sobrenome,
                nr_cpf_usuario   cpf,
                em_usuario       email,
                dt_nascimento    nascimento,
                ds_senha         senha
        FROM 
                db_appfrei.tb_cadastro

        WHERE 
                id_cadastro = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0][0];

    return registros
}

export async function consultarCadastroCpf(cpf){
    const comando = `
        SELECT
                id_cadastro      id,
                nm_usuario       nome,
                sb_usuario       sobrenome,
                nr_cpf_usuario   cpf,
                em_usuario       email,
                dt_nascimento    nascimento,
                ds_senha         senha
        FROM 
                db_appfrei.tb_cadastro

        WHERE 
                nr_cpf_usuario = ?
    `;

    let resposta = await con.query(comando, [cpf]);
    let registros = resposta[0][0];

    return registros
}

export async function alterarCadastro(id, cadastro) {
    const comando = `
        UPDATE 
                db_appfrei.tb_cadastro
        SET 
                nm_usuario      = ?,
                sb_usuario      = ?,
                nr_cpf_usuario  = ?,
                em_usuario      = ?,
                dt_nascimento   = ?,
                ds_senha        = ?
        WHERE 
                id_cadastro = ?
    `;

    let resposta = await con.query(comando, [cadastro.nome, cadastro.sobrenome, cadastro.cpf, cadastro.email, cadastro.nascimento, cadastro.senha, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function alterarSenhaCadastro(cpf, senha){
    const comando = `
        UPDATE
                db_appfrei.tb_cadastro
        SET
                ds_senha = ?
        WHERE
                nr_cpf_usuario = ?
    `;

    let resposta = await con.query(comando, [senha, cpf]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function alterarEmailCadastro(cpf, email){
    const comando = `
        UPDATE
                db_appfrei.tb_cadastro
        SET
                em_usuario = ?
        WHERE
                nr_cpf_usuario = ?
    `;

    let resposta = await con.query(comando, [email, cpf]);
    let info = resposta[0];

    return info.affectedRows;

}

export async function deletarCadastro(id) {
    const comando = `
        DELETE FROM 
                db_appfrei.tb_cadastro
        WHERE  
                id_cadastro = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}