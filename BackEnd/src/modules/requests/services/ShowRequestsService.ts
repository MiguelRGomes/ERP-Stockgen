import { getCustomRepository } from "typeorm";
import Requests from "../typeorm/entities/Requests";
import RequestsRepository from "../typeorm/repositories/RequestsRepository";
import AppError from '../../../errors/AppError'

interface IRequest {
    id: string
}

class ShowRequestsService {

    public async execute({id}: IRequest): Promise<Requests> {
        let requestsRepository = getCustomRepository(RequestsRepository)
        let requests = await requestsRepository.findOne(id)
        if (!requests) {
            throw new AppError('Produto não existe')
        }
        return requests
    }
}

export default ShowRequestsService