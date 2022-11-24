import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import Employee from "../typeorm/entities/Employee"
import EmployeeRepository from "../typeorm/repositories/EmployeeRepository"

//cria um tipo de dado
interface IRequest {
    cpf: string
    name: string;
    birthDate: Date;
    role: string;
    admissionDate: Date;
    email: string;
}

class UpdateEmployeeService {

    public async execute({cpf, name, birthDate, role, admissionDate, email}: IRequest): Promise<Employee> {
        const employeeRepository = getCustomRepository(EmployeeRepository)
        // verifica se o funcionario existe
        const employeeExist = await employeeRepository.findOne(cpf)
        if (!employeeExist){
            // sai do método
            throw new AppError('Produto não existe', 400)
        }
        // verifica se o cpf alterado já existe no BD
        const cpfExist = await employeeRepository.findByName(cpf)
        if (cpfExist){
            // sai do método
            throw new AppError('Cpf do funcionário já existe', 400)
        }
        // vamos atualizar
        
        employeeExist.cpf = cpf
        employeeExist.name = name
        employeeExist.birthDate = birthDate
        employeeExist.role = role
        employeeExist.admissionDate = admissionDate
        employeeExist.email = email
        await employeeRepository.save(employeeExist)
        return employeeExist
    }
}

export default UpdateEmployeeService