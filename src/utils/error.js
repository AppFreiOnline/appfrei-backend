global.criarErro = function criarErro(err){
    let obj = {
        erro: err.message
    }

    return obj;
}