import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"

// vamos decorar a classe como uma entidade do banco de dados
@Entity('employee')
class Employee {
    @PrimaryColumn()
    cpf: string
    @Column()
    name: string
    @Column()
    birthDate: Date
    @Column()
    role: string
    @Column()
    admissionDate: Date
    @Column()
    email: string
    @CreateDateColumn() // Data gerada quando houver criação
    created_at: Date
    @UpdateDateColumn() // Data gerada quando houver alteração
    updated_at: Date

}
// permite que a classe seja usada fora daqui
export default Employee