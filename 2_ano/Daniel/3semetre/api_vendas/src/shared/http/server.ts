//importar a dependencia express
import express from 'express'
import routes from './routes/routes'
import "../typeorm"

//importa conexão com BD

//Criar servidor
let servidor = express();

// associa as rotas ao servidor 
servidor.use(express.json())
servidor.use(routes)
//sobe o servidor, que fica escutando e aguardando requisições 
servidor.listen(3333, () => {
    console.log('Server up runing ╰(*°▽°*)╯')
})

//COMANDOS DOCKER
// docker ps (Ve maquinas ativas)
// docker run --name postgres54321 -e POSTGRES_PASSWORD=docker -p 54321:5432 -d postgres