import con from './connection.js';

export async function inserirAdmin(admin) {
        const comando = `
            INSERT INTO db_appfrei.tb_admin(nm_admin, em_admin, ds_senha)
            VALUES (?, ?, ?);
        `;

        let resposta = await con.query(comando, [admin.nome, admin.email, admin.senha]);
        let info = resposta[0];

        return info.insertId;
}

export async function consultarAdmin() {
        const comando = `
            SELECT 
                    id_admin      id,
                    nm_admin      nome,
                    em_admin      email,
                    ds_senha      senha
            FROM    
                    db_appfrei.tb_admin;
        `;

        let resposta = await con.query(comando);
        let registros = resposta[0];

        return registros;

}

export async function consultarAdminId(id) {
        const comando = `
            SELECT 
                    id_admin        id,
                    nm_admin      nome,
                    em_admin      email
            FROM    
                    db_appfrei.tb_admin
            WHERE
                    id_admin = ?
        `;

        let resposta = await con.query(comando, [id]);
        let registros = resposta[0][0];

        return registros;

}

export async function verificarAdmin(admin) {
        const comando = `
            SELECT 
                    id_admin      id,
                    nm_admin      nome,
                    em_admin      email,
                    ds_senha      senha
            FROM    
                    db_appfrei.tb_admin
            WHERE
                    nm_admin = ?
                    and ds_senha = ?
         
        `;

        let resposta = await con.query(comando, [admin.nome, admin.senha]);
        let registros = resposta[0][0];

        return registros;

}

export async function alterarAdmin(id, admin) {
        const comando = `
            UPDATE
                    db_appfrei.tb_admin
            SET
                    nm_admin = ?,
                    em_admin = ?
            WHERE
                    id_admin = ?
        `;

        let resposta = await con.query(comando, [admin.nome, admin.email, id]);
        let info = resposta[0];

        return info.affectedRows;
}

export async function deletarAdmin(id) {
        const comando = `
            DELETE FROM 
                    db_appfrei.tb_admin
            WHERE  
                    id_admin = ?
        `;

        let resposta = await con.query(comando, [id]);
        let info = resposta[0];

        return info.affectedRows;
}