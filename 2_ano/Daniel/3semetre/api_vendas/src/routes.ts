//import a classe router da dependencia express
import { Router } from "express";

// cria um oobjeto da classe Router
let routes = Router()

// Rota Get padrão / 
// REQUEST = REQUISIÇÃO
// RESPONSE = RESPOSTA
routes.get('/', (request, response) => {
    return response.json({
        message: 'Funcionou meu primeiro exemplo'
    })
})

// Exportar o objeto para uso em outro arquivo

export default routes;