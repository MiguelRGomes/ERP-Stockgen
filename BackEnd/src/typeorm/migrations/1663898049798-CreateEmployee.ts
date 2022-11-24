import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEmployee1663898049798 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'employee',
            columns: [
                {
                    name: 'cpf',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'birthDate',
                    type: 'date'
                },
                {
                    name: 'role',
                    type: 'varchar'
                },
                {
                    name: 'admissionDate',
                    type: 'date'
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
