import con from './connection.js';

export async function adicionarUsuario(usuario){
    const comando = `
    insert into tb_usuario(nm_usuario, sbn_usuario, cpf_usuario, email_usuario, dt_nascimento, senha)
                     values(?, ?, ?, ?, ?, ?);
    `;

    let resposta = await con.query(comando, [cliente.nome, cliente.sobrenome, cliente.cpf, cliente.email, cliente.nascimento, cliente.senha]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarUsuario(){
    const comando = `
    select id_usuario       id,
           nm_usuario       nome,
           sbn_usuario      sobrenome,
           cpf_usuario      cpf,
           email_usuario    email,
           dt_nascimento    nascimento,
           ds_senha         senha

           from tb_usuario;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros

}

export async function alterarUsuario(id, usuario){
    let comando = `
    update tb_usuario
    set nm_usuario = ?,
        sbn_usuario = ?,
        cpf_usuario = ?,
        email_usuario = ?,
        dt_nascimento = ?,
        ds_senha = ?
    
    where id_usuario = ?
    `;

    let resposta = await con.query(comando, [usuario.nome, usuario.sobrenome, usuario.cpf, usuario.email, usuario.nascimento, usuario.senha, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function removerUsuario(id){
    let comando = `
    delete from tb_usuario
    where id_usuario = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}