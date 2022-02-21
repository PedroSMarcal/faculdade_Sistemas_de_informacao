import AppError from "src/shared/errors/AppErrors";
import { getCustomRepository } from "typeorm"
import Product from "../typeorm/entities/Products";
import ProductRepository from "../typeorm/repositories/ProductsRepository"

interface IRequest{
    id: string;
}

class ShowProductService{
    public async execute({id}: IRequest): Promise<Product>{
        let productRepository = getCustomRepository(ProductRepository)

        let products = await productRepository.findOne(id);
        if (!products){
            throw new AppError('Produto não existe!')

        }
        
        return products
    }
}

export default ShowProductService