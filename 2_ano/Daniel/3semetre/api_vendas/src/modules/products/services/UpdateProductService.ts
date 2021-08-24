import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import ProductRepository from "../typeorm/repositories/ProductsRepository";

class UpdateProductService{
    public async execute(response: Response, request: Request): Promise<void>{
        let {id, name, price, quantity} = request.body;

        let customRepository = getCustomRepository(ProductRepository);

        let product = customRepository.findOne({id});
    }
}

export default UpdateProductService;