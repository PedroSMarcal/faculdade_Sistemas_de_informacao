//importar a dependencia express
import express from 'express'
import routes from './routes'

//Criar servidor
let servidor = express();

// associa as rotas ao servidor 
servidor.use(routes)

//sobe o servidor, que fica escutando e aguardando requisições 
servidor.listen(3333, () => {
    console.log('Server up runing ╰(*°▽°*)╯')
})