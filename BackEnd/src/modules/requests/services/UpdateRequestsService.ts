import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import Requests from "../typeorm/entities/Requests"
import RequestsRepository from "../typeorm/repositories/RequestsRepository"

//cria um tipo de dado
interface IRequest {
    id: string
    nameEmployee: string
    product: string
    quantity: number
}

class UpdateRequestsService {

    public async execute({id, nameEmployee, product, quantity}: IRequest): Promise<Requests> {
        const requestsRepository = getCustomRepository(RequestsRepository)
        // verifica se o pedido existe
        const requestsExist = await requestsRepository.findOne(id)
        if (!requestsExist){
            // sai do método
            throw new AppError('Produto não existe', 400)
        }
        // verifica se o nome alterado já existe no BD
        const idExist = await requestsRepository.findOne(id)
        if (idExist){
            // sai do método
            throw new AppError('Este pedido já existe', 400)
        }
        // vamos atualizar
        requestsExist.nameEmployee = nameEmployee
        requestsExist.product = product
        requestsExist.quantity = quantity
        await requestsRepository.save(requestsExist)
        return requestsExist
    }
}

export default UpdateRequestsService