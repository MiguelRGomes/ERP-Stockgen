import { Router } from "express";
import router from "../../../routes";
import EmployeeController from "../controllers/EmployeeController";
import isAuthenticated from '../../../middleware/isAuthenticated'

// cria objeto para a rota
const routerEmployee = Router()
// cria um objeto controller
const controllerEmployee = new EmployeeController()

// está criada a rota para inserir um funcionario no banco de dados
routerEmployee.post('/', controllerEmployee.create)

routerEmployee.get('/', 
    isAuthenticated, 
    controllerEmployee.list)

routerEmployee.get('/:cpf', controllerEmployee.show)

routerEmployee.delete('/:cpf', controllerEmployee.delete)

routerEmployee.put('/:cpf', controllerEmployee.update)

export default routerEmployee