import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRequests1663899527676 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'requests',
                columns: [
                    {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'nameEmployee',
                        type: 'varchar'
                    },
                    {
                        name: 'product',
                        type: 'varchar',
                        isUnique: true 
                    },
                    {
                        name: 'quantity',
                        type: 'int'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }

                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
