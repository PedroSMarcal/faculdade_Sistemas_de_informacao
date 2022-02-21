import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Products";
import ProductRepository from "../typeorm/repositories/ProductsRepository";

class ListProductService{
    public async execute(): Promise<Product[]>{
        let productRepository  = getCustomRepository(ProductRepository)
        let products = await productRepository.find();

        return products;
    }
}

export default ListProductService