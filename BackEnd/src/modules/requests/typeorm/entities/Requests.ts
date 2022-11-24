import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

// vamos decorar a classe como uma entidade do banco de dados
@Entity('requests')
class Requests {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    nameEmployee: string
    @Column()
    product: string
    @Column()
    quantity: number
    @CreateDateColumn() // Data gerada quando houver criação
    created_at: Date
    @UpdateDateColumn() // Data gerada quando houver alteração
    updated_at: Date

}
// permite que a classe seja usada fora daqui
export default Requests