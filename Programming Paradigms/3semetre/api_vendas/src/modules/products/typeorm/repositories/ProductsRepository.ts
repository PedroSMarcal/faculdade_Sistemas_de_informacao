import { EntityRepository, Repository } from "typeorm";
import Product from "../entities/Products";

@EntityRepository(Product)
export default class ProductRepository extends Repository<Product>{
    // exemplo de metódo de busca por Nome - algo customizado
    // assíncrono
    public async findByName(name: String): Promise<Product | undefined>{
        const product = await this.findOne({
            where: {
                name
            }
        })

        return product;
    }
}