import { getCustomRepository } from "typeorm";
import Employee from "../typeorm/entities/Employee";
import EmployeeRepository from "../typeorm/repositories/EmployeeRepository";
import AppError from '../../../errors/AppError'

interface IRequest {
    cpf: string
}

class ShowEmployeeService {

    public async execute({cpf}: IRequest): Promise<Employee> {
        let employeeRepository = getCustomRepository(EmployeeRepository)
        let employee = await employeeRepository.findOne(cpf)
        if (!employee) {
            throw new AppError('Produto não existe')
        }
        return employee
    }
}

export default ShowEmployeeService