import { EntityRepository, Repository } from "typeorm";
import Requests from "../entities/Requests";

// vamos herdar os métodos de CRUD
@EntityRepository(Requests)
class RequestsRepository extends Repository<Requests> {
    // herdamos os métodos CRUD, mas podemos criar novos métodos
    // método assíncrono 
    public async findByName(name: string): Promise<Requests | undefined>{
        // await - aguardar/esperar pelo resultado da busca
        let requests = await this.findOne({
            where: {
                name
            }
        })
        return requests
    }
}
// exporta para ser usado em outra classe
export default RequestsRepository