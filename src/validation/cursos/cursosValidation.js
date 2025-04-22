
export function inserirValidation (curso) {
    if (!curso.nome) {
        throw new Error("O parâmetro 'nome' deve ser preenchido corretamente");
    }
    else if (!curso.tipo) {
        throw new Error("O parâmetro 'tipo' deve ser preenchido corretamente");
    } 
    else if (!curso.cargaHoraria || isNaN(curso.cargaHoraria)) {
        throw new Error("O parâmetro 'cargaHoraria' deve ser preenchido corretamente");
    } 
    else if (!curso.descricao) {
        throw new Error("O parâmetro 'descricao' deve ser preenchido corretamente");
    } 
    else if (!curso.idadeMinima || isNaN(curso.idadeMinima)) {
        throw new Error("O parâmetro 'idadeMinima' deve ser preenchido corretamente");
    } 
    else if (!curso.idadeMaxima || isNaN(curso.idadeMaxima)) {
        throw new Error("O parâmetro 'idadeMaxima' deve ser preenchido corretamente");
    } 
    else if (!curso.escolaridadeMinima) {
        throw new Error("O parâmetro 'escolaridadeMinima' deve ser preenchido corretamente");
    } 
    else if (!curso.contribuicao || isNaN(curso.contribuicao)) {
        throw new Error("O parâmetro 'contribuicao' deve ser preenchido corretamente");
    }
    else if (!curso.videoApresentacao) {
        throw new Error("O parâmetro 'videoApresentacao' deve ser preenchido corretamente");
    } 
    else if (!curso.imagem) {
        throw new Error("O parâmetro 'imagem' deve ser preenchido corretamente");
    }
}

export function IdValidation (id) {
    if (isNaN(id))  throw new Error('O ID deve ser preenchido corretamente');
}