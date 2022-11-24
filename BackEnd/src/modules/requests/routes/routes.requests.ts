import { Router } from "express";
import router from "../../../routes";
import RequestsController from "../controllers/RequestsController";
import isAuthenticated from '../../../middleware/isAuthenticated'

// cria objeto para a rota
const routerRequests = Router()
// cria um objeto controller
const controllerRequests = new RequestsController()

// está criada a rota para inserir um pedido no banco de dados
routerRequests.post('/', controllerRequests.create)

routerRequests.get('/', 
    isAuthenticated, 
    controllerRequests.list)

routerRequests.get('/:id', controllerRequests.show)

routerRequests.delete('/:id', controllerRequests.delete)

routerRequests.put('/:id', controllerRequests.update)

export default routerRequests