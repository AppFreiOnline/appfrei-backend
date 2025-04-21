
export function inserirValidation (faq) {
    if (!faq.pergunta && !faq.resposta) {
        throw new Error('Os parâmetros devem ser preenchidos corretamente');
    } 
    else if (!faq.pergunta) {
        throw new Error('O parâmetro "pergunta" deve ser preenchido corretamente');
    } 
    else if (!faq.resposta) {
        throw new Error('O parâmetro "resposta" deve ser preenchido corretamente');
    }
}

export function IdValidation (id) {
    if (isNaN(id))  throw new Error('O ID deve ser preenchido corretamente');
}