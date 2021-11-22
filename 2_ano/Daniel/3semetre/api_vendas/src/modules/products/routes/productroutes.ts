import {Router} from 'express'
import ProductController from '../controllers/ProductController'
import {celebrate, Joi, Segments} from 'celebrate'
//Cria a rota do produto 

// cria a rota de produto
let productRouter = Router()

//cria o controler das rotas
let productController = new ProductController();
 
// Rota de Consulta
productRouter.get('/', productController.list);
productRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}),
productController.show)

// Rota de Inserção
productRouter.post('/', 
celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(), 
        price: Joi.number().precision(2).required(),
        quantity: Joi.number().required
    }
}),
productController.create)

// Rota de Deleção
productRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}),
productController.delete)

// Rota de atualização
productRouter.put('/:id',  celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
    name: Joi.string().required(), 
    price: Joi.number().precision(2).required(),
    quantity: Joi.number().required
}
}),
productController.update)

export default productRouter;