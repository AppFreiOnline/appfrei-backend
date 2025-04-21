
export function inserirValidation(acompanhamento) {
    if (!acompanhamento.primeiraOpcao) {
        throw new Error('O parâmetro "primeiraOpcao" deve ser preenchido corretamente');
    }
    else if (!acompanhamento.segundaOpcao) {
        throw new Error('O parâmetro "segundaOpcao" deve ser preenchido corretamente');
    }
    else if (!acompanhamento.codigoVerificacao || isNaN(acompanhamento.codigoVerificacao)) {
        throw new Error('O parâmetro "codigoVerificacao" deve ser preenchido corretamente');
    }
    else if (!acompanhamento.preInscrito) {
        throw new Error('O parâmetro "preInscrito" deve ser preenchido corretamente');
    }
    else if (!acompanhamento.taxaPaga) {
        throw new Error('O parâmetro "taxaPaga" deve ser preenchido corretamente');
    }
    else if (!acompanhamento.alunoAprovado) {
        throw new Error('O parâmetro "alunoAprovado" deve ser preenchido corretamente');
    }
    else if (!acompanhamento.dataPagamento) {
        throw new Error('O parâmetro "dataPagamento" deve ser preenchido corretamente');
    }
    else if (!acompanhamento.idPreInscricao || isNaN(acompanhamento.idPreInscricao)) {
        throw new Error('O parâmetro "dataPagamento" deve ser preenchido corretamente');
    }
}

export function validarId(id) {
    if (isNaN(id)) {
        throw new Error('O parâmetro "id" deve ser preenchido corretamente');
    }
}