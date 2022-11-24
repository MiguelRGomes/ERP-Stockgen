import { getCustomRepository } from "typeorm";
import Requests from "../typeorm/entities/Requests";
import RequestsRepository from "../typeorm/repositories/RequestsRepository";

class ListRequestsService {

    public async execute(): Promise<Requests[]> {
        let requestsRepository = getCustomRepository(RequestsRepository)
        let requestss = await requestsRepository.find();
        return requestss
    }
}

export default ListRequestsService