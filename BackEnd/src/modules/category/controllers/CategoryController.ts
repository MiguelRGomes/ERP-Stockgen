import { Request, Response } from "express";
import CreateCategoryService from "../services/CreateCategoryService";
import DeleteCategoryService from "../services/DeleteCategoryService";
import ListCategoryService from "../services/ListCategoryService";
import ShowCategoryService from "../services/ShowCategoryService";
import UpdateCategoryService from "../services/UpdateCategoryService";

class CategoryController {

    // não se trata regra de negócio aqui
    public async create(request: Request, response: Response ): Promise<Response>{

        // obter os dados do navegador (usuário)
        let {id, name} = request.body
        // vamos criar objeto da classe CreateCategoryService
        const object = new CreateCategoryService()
        const newCategory = await object.execute({id, name})
        // retorna ou responder este novo pedido criado em formato json
        return response.json(newCategory)
    }

    public async list(request: Request, response: Response ): Promise<Response> {
        let listService = new ListCategoryService()
        let Categorys = await listService.execute()
        return response.json(Categorys)
    }

    public async show(request: Request, response: Response): Promise<Response> {
        // recupera id
        const {id} = request.params
        const showCategoryService = new ShowCategoryService()
        const Category = await showCategoryService.execute({id})
        return response.json(Category) // retorna o pedido selecionado

    }
    
    public async delete(request: Request, response: Response): Promise<Response> {
        // recupera id 
        const {id} = request.params
        const deleteCategoryService = new DeleteCategoryService()
        await deleteCategoryService.execute(id)
        return response.json([])
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const {id} = request.params
        const {name} = request.body
        const updateCategoryService = new UpdateCategoryService()
        const CategoryUpdated = await 
            updateCategoryService.execute({id, name})
        return response.json(CategoryUpdated)
    }

}

export default CategoryController
