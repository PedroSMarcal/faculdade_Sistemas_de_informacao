import {Router} from 'express'
import ProductController from '../controllers/ProductController'
//Cria a rota do produto 

// cria a rota de produto
let productRouter = Router()

//cria o controler das rotas
let productController = new ProductController();
 
// Rota de Consulta
productRouter.get('/', productController.list);
productRouter.get('/:id', productController.show)

// Rota de Inserção
productRouter.post('/', productController.create)

// Rota de Deleção
productRouter.delete('/:id', productController.delete)

// Rota de atualização
productRouter.put('/:id', productController.update)

export default productRouter;