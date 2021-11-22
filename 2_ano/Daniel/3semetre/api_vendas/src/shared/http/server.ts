//importar a dependencia express
import express, { NextFunction, Request, Response } from 'express'
import routes from './routes/routes'
import "../typeorm"
import {errors} from 'celebrate'
import 'express-async-errors'
import AppError from '../../shared/errors/AppErrors'
//importa conexão com BD

//Criar servidor
let servidor = express();

// associa as rotas ao servidor 
servidor.use(express.json())
servidor.use(routes)

// vamos utilizar a classe AppError
servidor.use(errors())

//tratar erros
servidor.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError){
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message
            })
        }

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error'
        })
    }
)

//sobe o servidor, que fica escutando e aguardando requisições 
servidor.listen(3333, () => {
    console.log('Server up runing ╰(*°▽°*)╯')
})

//COMANDOS DOCKER
// docker ps (Ve maquinas ativas)
// docker run --name postgres54321 -e POSTGRES_PASSWORD=docker -p 54321:5432 -d postgres