import { Request, Response } from "express";
import CreateEmployeeService from "../services/CreateEmployeeService";
import DeleteEmployeeService from "../services/DeleteEmployeeService";
import ListEmployeeService from "../services/ListEmployeeService";
import ShowEmployeeService from "../services/ShowEmployeeService";
import UpdateEmployeeService from "../services/UpdateEmployeeService";

class EmployeeController {

    // não se trata regra de negócio aqui
    public async create(request: Request, response: Response ): Promise<Response>{

        // obter os dados do navegador 
        let {cpf, name, birthDate, role, admissionDate, email} = request.body
        // vamos criar objeto da classe CreateEmployeeService
        const object = new CreateEmployeeService()
        const newEmployee = await object.execute({cpf, name, birthDate, role, admissionDate, email})
        // retorna ou responder este novo funcionario criado em formato json
        return response.json(newEmployee)
    }

    public async list(request: Request, response: Response ): Promise<Response> {
        let listService = new ListEmployeeService()
        let employees = await listService.execute()
        return response.json(employees)
    }

    public async show(request: Request, response: Response): Promise<Response> {
        // recupera cpf do funcionario
        const {cpf} = request.params
        const showEmployeeService = new ShowEmployeeService()
        const employee = await showEmployeeService.execute({cpf})
        return response.json(employee) // retorna o funcionario selecionado

    }
    
    public async delete(request: Request, response: Response): Promise<Response> {
        // recupera cpf do funcionario
        const {cpf} = request.params
        const deleteEmployeeService = new DeleteEmployeeService()
        await deleteEmployeeService.execute(cpf)
        return response.json([])
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const {cpf} = request.params
        const {name, birthDate, role, admissionDate, email} = request.body
        const updateEmployeeService = new UpdateEmployeeService()
        const employeeUpdated = await 
            updateEmployeeService.execute({cpf, name, birthDate, role, admissionDate, email})
        return response.json(employeeUpdated)
    }

}

export default EmployeeController