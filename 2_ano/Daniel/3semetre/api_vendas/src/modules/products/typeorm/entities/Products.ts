import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// vamos utilizar o padrão de projeto Decorator - @
@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: String; //uuid -> universal unique identifier
    @Column()
    name: String;

    @Column('decimal')
    price: Number;

    @Column('int')
    quantity: Number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Product;
// // fazer o metodo construtor - inicia os valores da variavel
// constructor(id: String, name: String, price: Number, quantity: Number, created_at: Date, updated_at: Date){
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//     this.created_at = created_at;
//     this.updated_at = updated_at;
// }