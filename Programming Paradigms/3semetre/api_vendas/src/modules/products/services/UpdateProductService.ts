import { Request, Response } from "express";
import AppError from "src/shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Products";
import ProductRepository from "../typeorm/repositories/ProductsRepository";

interface IRequest {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

class UpdateProductService{
    public async execute({id, name, price, quantity}: IRequest): Promise<Product>{
        let productRepository = getCustomRepository(ProductRepository);

        let productExist = await productRepository.findOne(id);

        if(!productExist){
            throw new AppError('Não Existe')
        }
        // produto existe
        let productSameName = await productRepository.findByName(name)
        if (!productSameName){
            throw new AppError('Produto já tem um nome existente')
        }
        // efetivar atualizar
        productExist.name = name;
        productExist.price = price;
        productExist.quantity = quantity;
        await productRepository.save(productExist)

        return productExist;
    }
}

export default UpdateProductService;