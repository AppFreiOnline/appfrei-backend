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