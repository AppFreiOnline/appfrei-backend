export function inserirValidation(inscricao) {
    if (!inscricao.nome && !inscricao.email && !inscricao.telefone && !inscricao.nascimento && !inscricao.sexo && !inscricao.cpf && !inscricao.conheceu && !inscricao.renda && !inscricao.pessoas && !inscricao.escolaridade && !inscricao.tipoEscola && !inscricao.nomeEscola && !inscricao.primeiraOpcao && !inscricao.segundaOpcao && !inscricao.confirmado && !inscricao.codigo && !inscricao.idCadastro) {
        throw new Error('Os parâmetros devem ser preenchidos corretamente')
    }
    else if (!inscricao.nome) {
        throw new Error('O parâmetro "nome" deve ser preenchido corretamente')
    }
    else if (!inscricao.email) {
        throw new Error('O parâmetro "email" deve ser preenchido corretamente')
    }
    else if (!inscricao.telefone) {
        throw new Error('O parâmetro "telefone" deve ser preenchido corretamente')
    }
    else if (!inscricao.nascimento) {
        throw new Error('O parâmetro "nascimento" deve ser preenchido corretamente')
    }
    else if (!inscricao.sexo) {
        throw new Error('O parâmetro "sexo" deve ser preenchido corretamente')
    }
    else if (!inscricao.cpf) {
        throw new Error('O parâmetro "cpf" deve ser preenchido corretamente')
    }
    else if (!inscricao.conheceu) {
        throw new Error('O parâmetro "conheceu" deve ser preenchido corretamente')
    }
    else if (!inscricao.renda) {
        throw new Error('O parâmetro "renda" deve ser preenchido corretamente')
    }
    else if (!inscricao.pessoas) {
        throw new Error('O parâmetro "pessoas" deve ser preenchido corretamente')
    }
    else if (!inscricao.escolaridade) {
        throw new Error('O parâmetro "escolaridade" deve ser preenchido corretamente')
    }
    else if (!inscricao.tipoEscola) {
        throw new Error('O parâmetro "tipoEscola" deve ser preenchido corretamente')
    }
    else if (!inscricao.nomeEscola) {
        throw new Error('O parâmetro "nomeEscola" deve ser preenchido corretamente')
    }
    else if (!inscricao.primeiraOpcao) {
        throw new Error('O parâmetro "primeiraOpcao" deve ser preenchido corretamente')
    }
    else if (!inscricao.segundaOpcao) {
        throw new Error('O parâmetro "segundaOpcao" deve ser preenchido corretamente')
    }
    else if (!inscricao.confirmado) {
        throw new Error('O parâmetro "confirmado" deve ser preenchido corretamente')
    }
    else if (!inscricao.codigo) {
        throw new Error('O parâmetro "codigo" deve ser preenchido corretamente')
    }
    else if (!inscricao.idCadastro) {
        throw new Error('O parâmetro "idCadastro" deve ser preenchido corretamente')
    }
}

export function IdValidation(id) {
    if(isNaN(id)){
        throw new Error('O ID deve ser preenchido corretamente')
    }
}

export function cpfValidation(cpf){
    if (!cpf || isNaN(cpf)){
        throw new Error('O CPF deve ser preenchido corretamente')
    }
    else if(String(cpf).length != 11){
        throw new Error('O CPF deve conter 11 dígitos')
    }
}

export function confirmadoValidation(confirmado){
    if(!confirmado){
        throw new Error('A confirmação deve ser preenchido corretamente')
    }
}