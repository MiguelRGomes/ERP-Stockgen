import { getCustomRepository } from "typeorm";
import Requests from "../typeorm/entities/Requests";
import RequestsRepository from "../typeorm/repositories/RequestsRepository";
import AppError from '../../../errors/AppError'

// vamos criar um tipo de dados em TS com interface
interface IRequest {
    nameEmployee: string;
    product: string;
    quantity: number;
}

class CreateRequestsService {

    // cria um método assíncrono que executa a inserção
    // método precisa promoter que irá retornar um produto
    public async execute({nameEmployee, product, quantity}: IRequest): Promise<Requests> {
        
        // obter o repositório de Requests
        const requestsRepository = getCustomRepository(RequestsRepository)
        // criando uma regra de negócio - consulta pedido do mesmo funcionario
        const requestsExist = await requestsRepository.findOne({nameEmployee});
        if (requestsExist){
            // vamos lançar uma exceção
            throw new AppError('Já existe um pedido cadastrado com este funcionario hoje')
        }
        // vem aqui somente se não tem produto com o nome criado
        const novo = requestsRepository.create({
            nameEmployee, product, quantity
        })
        // EFETIVAMENTE SALVAMOS NO BD
        await requestsRepository.save(novo)
        return novo
    }

}

export default CreateRequestsService