import { Router } from "express";
import router from "../../../routes";
import CategoryController from "../controllers/CategoryController";
import isAuthenticated from '../../../middleware/isAuthenticated'

// cria objeto para a rota
const routerCategory = Router()
// cria um objeto controller
const controllerCategory = new CategoryController()

// está criada a rota para inserir um pedido no banco de dados
routerCategory.post('/', controllerCategory.create)

routerCategory.get('/', 
    isAuthenticated, 
    controllerCategory.list)

routerCategory.get('/:id', controllerCategory.show)

routerCategory.delete('/:id', controllerCategory.delete)

routerCategory.put('/:id', controllerCategory.update)

export default routerCategory