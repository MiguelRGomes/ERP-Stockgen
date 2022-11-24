import { EntityRepository, Repository } from "typeorm";
import Employee from "../entities/Employee";

// vamos herdar os métodos de CRUD
@EntityRepository(Employee)
class EmployeeRepository extends Repository<Employee> {
    // herdamos os métodos CRUD, mas podemos criar novos métodos
    // método assíncrono 
    public async findByName(name: string): Promise<Employee | undefined>{
        // await - aguardar/esperar pelo resultado da busca
        let employee = await this.findOne({
            where: {
                name
            }
        })
        return employee
    }
}
// exporta para ser usado em outra classe
export default EmployeeRepository