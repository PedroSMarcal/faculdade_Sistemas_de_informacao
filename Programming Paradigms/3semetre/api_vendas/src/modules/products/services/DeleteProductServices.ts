import AppError from "src/shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import ProductRepository from "../typeorm/repositories/ProductsRepository";

// cria um tipo de dado
interface IRequest {
    id: string; // uuid -> universally unique identifier
}

// criação de classe
class DeleteProductService{
    // cria o metodo execute
    public async execute ({id}: IRequest): Promise <void>{
        let productRepository = getCustomRepository(ProductRepository)
        // busca pelo produto com id
         
        let product = await productRepository.findOne(id);
        if (!product){
            throw new AppError('Could not Delete!')
        }
        await productRepository.remove(product);
    }
}
export default DeleteProductService;