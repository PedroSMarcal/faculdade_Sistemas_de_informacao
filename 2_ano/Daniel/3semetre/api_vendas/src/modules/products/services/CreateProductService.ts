import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Products";
import ProductRepository from "../typeorm/repositories/ProductsRepository";

//Criar Interfaces -> tipo de dado
interface IRequest{
    name: String,
    price: Number,
    quantity: Number;
}

//criar uma classe que utiliza a interface
class CreateProductService {
    // criar um metodo de execução para criação do Produto
    public async execute({name, price, quantity}:IRequest): Promise<Product>{
        // recupera um repositorio do produto
        let productRepository = getCustomRepository(ProductRepository);
        // verifica um produto já existente
        let productExist = await productRepository.findByName(name);

        if (productExist){
            // não podemos cadastrar
            console.log('Produto existe no BD')
            //lançar uma excessão
        }
        // produto nã existe
        let newProduct = productRepository.create({
            name,
            price,
            quantity
        })
        // vamos salvar no banco
        await productRepository.save(newProduct)

        return newProduct
    }
}

export default CreateProductService;