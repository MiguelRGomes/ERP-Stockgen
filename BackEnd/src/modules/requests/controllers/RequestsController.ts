import { Request, Response } from "express";
import CreateRequestsService from "../services/CreateRequestsService";
import DeleteRequestsService from "../services/DeleteRequestsService";
import ListRequestsService from "../services/ListRequestsService";
import ShowRequestsService from "../services/ShowRequestsService";
import UpdateRequestsService from "../services/UpdateRequestsService";

class RequestsController {

    // não se trata regra de negócio aqui
    public async create(request: Request, response: Response ): Promise<Response>{

        // obter os dados do navegador (usuário)
        let {nameEmployee, product, quantity} = request.body
        // vamos criar objeto da classe CreateRequestsService
        const object = new CreateRequestsService()
        const newRequests = await object.execute({nameEmployee, product, quantity})
        // retorna ou responder este novo pedido criado em formato json
        return response.json(newRequests)
    }

    public async list(request: Request, response: Response ): Promise<Response> {
        let listService = new ListRequestsService()
        let requestss = await listService.execute()
        return response.json(requestss)
    }

    public async show(request: Request, response: Response): Promise<Response> {
        // recupera id do pedido
        const {id} = request.params
        const showRequestsService = new ShowRequestsService()
        const requests = await showRequestsService.execute({id})
        return response.json(requests) // retorna o pedido selecionado

    }
    
    public async delete(request: Request, response: Response): Promise<Response> {
        // recupera id do pedido
        const {id} = request.params
        const deleteRequestsService = new DeleteRequestsService()
        await deleteRequestsService.execute(id)
        return response.json([])
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const {id} = request.params
        const {nameEmployee, product, quantity} = request.body
        const updateRequestsService = new UpdateRequestsService()
        const requestsUpdated = await 
            updateRequestsService.execute({id, nameEmployee, product, quantity})
        return response.json(requestsUpdated)
    }

}

export default RequestsController