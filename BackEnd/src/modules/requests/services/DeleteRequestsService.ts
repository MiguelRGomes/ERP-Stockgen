import { getCustomRepository } from "typeorm";
import RequestsRepository from "../typeorm/repositories/RequestsRepository";
import AppError from '../../../errors/AppError'

class DeleteRequestsService {

    public async execute(id: string) {

        const requestsRepository = getCustomRepository(RequestsRepository)
        const requestsExist = await requestsRepository.findOne(id)
        if (!requestsExist){
            throw new AppError('Produto não existe', 400)
        }
        await requestsRepository.remove(requestsExist)
    }   
}

export default DeleteRequestsService