import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductServices";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";
import UpdateProductService from "../services/UpdateProductService";

export default class ProductController{
    // perceba que nesta classe não existe regra de negócio
    // metódo para inserir o produto
    public async create(request: Request, response: Response): Promise<Response>{
        // recupera a informação do usuario
        let {name, price, quantity} = request.body
        
        // salva no BD
        let createProduct = new CreateProductService();
        let newProduct = await createProduct.execute({
            name, 
            price, 
            quantity
        });

        return response.json(newProduct) // Novo Produto Retornado
    }

    public async delete(request: Request, response: Response): Promise<Response>{
        // vem na URL 
        let {id} = request.params

        let deleteProduct = new DeleteProductService();
        await deleteProduct.execute({id})
        return response.json([])
    }

    public async list(request: Request, response: Response): Promise<Response>{
        let listProduct = new ListProductService();
        let products = listProduct.execute();
        return response.json(products);
    }

    // chama o ShowProductService
    public async show(request: Request, response: Response): Promise<Response>{
        let {id} = request.params;

        let showProduct = new ShowProductService();
        let product = await showProduct.execute({id});

        return response.json(product);
    }

    public async update(request: Request,  response: Response): Promise<Response>{
        let {id} = request.params
        let {name, price, quantity} = request.body;


        let updateService = new UpdateProductService();
        let productUpdate = await updateService.execute({id, name, price, quantity})

        return response.json(productUpdate)
    }
}