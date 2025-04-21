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