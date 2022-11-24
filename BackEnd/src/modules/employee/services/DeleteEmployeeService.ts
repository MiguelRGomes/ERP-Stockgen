import { getCustomRepository } from "typeorm";
import EmployeeRepository from "../typeorm/repositories/EmployeeRepository";
import AppError from '../../../errors/AppError'

class DeleteEmployeeService {

    public async execute(cpf: string) {

        const employeeRepository = getCustomRepository(EmployeeRepository)
        const employeeExist = await employeeRepository.findOne(cpf)
        if (!employeeExist){
            throw new AppError('Produto não existe', 400)
        }
        await employeeRepository.remove(employeeExist)
    }   
}

export default DeleteEmployeeService