export function inserirValidation(usuario) {
    if (!usuario.nome && !usuario.sobrenome && !usuario.cpf && !usuario.email && !usuario.nascimento && !usuario.senha) {
        throw new Error('Os parâmetros devem ser preenchidos corretamente')
    }
    else if (!usuario.nome) {
        throw new Error('O parâmetro "nome" deve ser preenchido corretamente')
    }
    else if (!usuario.sobrenome) {
        throw new Error('O parâmetro "sobrenome" deve ser preenchido corretamente')
    }
    else if (!usuario.cpf) {
        throw new Error('O parâmetro "cpf" deve ser preenchido corretamente')
    }
    else if (!usuario.email) {
        throw new Error('O parâmetro "email" deve ser preenchido corretamente')
    }
    else if (!usuario.nascimento) {
        throw new Error('O parâmetro "nascimento" deve ser preenchido corretamente')
    }
    else if (!usuario.senha) {
        throw new Error('O parâmetro "senha" deve ser preenchido corretamente')
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

export function emailValidation(email){
    if (!email){
        throw new Error('O email deve ser preenchido corretamente')
    }
    else if(!String(email).includes("@")){
        throw new Error('O email deve possuir "@"')
    }
}

export function senhaValidation(senha){
    if (!senha){
        throw new Error('A senha deve ser preenchida corretamente')
    }
    else if(String(senha).length < 8){
        throw new Error('A senha deve conter pelo menos 8 caracteres')
    }
}