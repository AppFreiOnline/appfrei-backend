import acompanhamentoController from './controller/acompanhamentoController.js'
import preInscricaoController from './controller/preInscricaoController.js'
import cadastroController from './controller/cadastroController.js'
import cursosController from './controller/cursosController.js'
import faqController from './controller/faqController.js'
import adminController from './controller/adminController.js'

export default function adicionarRotas(servidor) {

    servidor.use(acompanhamentoController)
    servidor.use(preInscricaoController)
    servidor.use(cadastroController)
    servidor.use(cursosController)
    servidor.use(faqController)
    servidor.use(adminController)
}