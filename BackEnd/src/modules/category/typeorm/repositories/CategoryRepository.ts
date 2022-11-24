import { EntityRepository, Repository } from "typeorm";
import Category from "../entities/Category";

// vamos herdar os métodos de CRUD
@EntityRepository(Category)
class CategoryRepository extends Repository<Category> {
    // herdamos os métodos CRUD, mas podemos criar novos métodos
    // método assíncrono 
    public async findByName(name: string): Promise<Category | undefined>{
        // await - aguardar/esperar pelo resultado da busca
        let category = await this.findOne({
            where: {
                name
            }
        })
        return category
    }
}
// exporta para ser usado em outra classe
export default CategoryRepository