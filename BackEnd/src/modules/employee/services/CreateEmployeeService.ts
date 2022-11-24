import { getCustomRepository } from "typeorm";
import Employee from "../typeorm/entities/Employee";
import EmployeeRepository from "../typeorm/repositories/EmployeeRepository";
import AppError from '../../../errors/AppError'

// vamos criar um tipo de dados em TS com interface
interface IRequest {
    cpf: string
    name: string;
    birthDate: Date;
    role: string;
    admissionDate: Date;
    email: string;
}

class CreateEmployeeService {

    // cria um método assíncrono que executa a inserção
    // método precisa promoter que irá retornar um funcionario
    public async execute({ cpf, name, birthDate, role, admissionDate, email}: IRequest): Promise<Employee> {
        
        // obter o repositório de Employee
        const employeeRepository = getCustomRepository(EmployeeRepository)
        // criando uma regra de negócio - consulta funcionario com mesmo cpf
        const employeeExist = await employeeRepository.findByName(cpf);
        if (employeeExist){
            // vamos lançar uma exceção
            throw new AppError('Já existe um funcionário com este cpf')
        }
        // vem aqui somente se não tem funcionario com o cpf criado
        const novo = employeeRepository.create({
            cpf, name, birthDate, role, admissionDate, email
        })
        // EFETIVAMENTE SALVAMOS NO BD
        await employeeRepository.save(novo)
        return novo
    }

}

export default CreateEmployeeService