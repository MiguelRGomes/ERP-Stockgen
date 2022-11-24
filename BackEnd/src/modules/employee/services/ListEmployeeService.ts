import { getCustomRepository } from "typeorm";
import Employee from "../typeorm/entities/Employee";
import EmployeeRepository from "../typeorm/repositories/EmployeeRepository";

class ListEmployeeService {

    public async execute(): Promise<Employee[]> {
        let employeeRepository = getCustomRepository(EmployeeRepository)
        let employees = await employeeRepository.find();
        return employees
    }
}

export default ListEmployeeService