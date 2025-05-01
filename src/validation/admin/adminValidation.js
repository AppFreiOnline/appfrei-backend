export function inserirValidation(admin) {
    if (!admin.nome && !admin.email && !admin.senha) {
        throw new Error('Os parâmetros devem ser preenchidos corretamente')
    }
    else if (!admin.nome) {
        throw new Error('O parâmetro "nome" deve ser preenchido corretamente')
    }
    else if (!admin.email) {
        throw new Error('O parâmetro "email" deve ser preenchido corretamente')
    }
    else if (!admin.senha) {
        throw new Error('O parâmetro "senha" deve ser preenchido corretamente')
    }
}

export function IdValidation(id) {
    if(isNaN(id)){
        throw new Error('O ID deve ser preenchido corretamente')
    }
}

export function emailValidation(email){
    if (!email){
        throw new Error('O email deve ser preenchido corretamente')
    }
    else if(!String(email).includes("@") || !String(email).includes(".com")){
        throw new Error('falta "@" ou ".com"')
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

export function verificarValidation(admin){
    if (!admin.nome && !admin.senha) {
        throw new Error('Os parâmetros devem ser preenchidos corretamente')
    }
    else if (!admin.nome) {
        throw new Error('O nome deve ser preenchido corretamente')
    }
    senhaValidation(admin.senha)
}