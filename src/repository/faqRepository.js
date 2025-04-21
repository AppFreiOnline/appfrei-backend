import con from './connection.js';

export async function inserirFaq(faq) {
    const comando = `
        INSERT INTO db_appfrei.tb_faq (nm_pergunta, ds_resposta)
        VALUES (?, ?)
    `;
    
    let resposta = await con.query(comando, [faq.pergunta, faq.resposta]);
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarFaq() {
    const comando = `
        SELECT  
                id_faq 				id,
                nm_pergunta 	    pergunta,
                ds_resposta   	    resposta
        FROM  
                db_appfrei.tb_faq
    `;
    
    let resposta = await con.query(comando);
    let registros = resposta[0]
    
    return registros;
}

export async function consultarFaqId(id) {
    const comando = `
        SELECT  
                id_faq              id,
                nm_pergunta 	    pergunta,
                ds_resposta   	    resposta
        FROM  
                db_appfrei.tb_faq
        WHERE   
                id_faq = ?
    `;
    
    let resposta = await con.query(comando, [id]);
    let registros = resposta[0][0]
    
    return registros;
}

export async function alterarFaq(faq, id) {
    const comando = `
        UPDATE 
                db_appfrei.tb_faq
           SET 
                nm_pergunta = ?,
                ds_resposta = ?
         WHERE 
                id_faq = ?
    `;

    let resposta = await con.query(comando, [faq.pergunta, faq.resposta, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function deletarFaq(id) {
    const comando = `
        DELETE FROM 
                db_appfrei.tb_faq
         WHERE 
                id_faq = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}