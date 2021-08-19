import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1629160802039 implements MigrationInterface {

    // este método será executado quando for criar uma tabela
    // o retorno do método é uma Promise (promessa de um retorno)
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Vamos criar a tabela no banco de dados
        // await = envia o pedido e não faz nada enquantp não obter resposta

        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'price',
                    type: 'decimal',
                    scale: 2
                },
                {
                    name: 'quantity',
                    type: 'int'
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
