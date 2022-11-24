import { getCustomRepository } from "typeorm";
import Category from "../typeorm/entities/Category";
import CategoryRepository from "../typeorm/repositories/CategoryRepository";

class ListCategoryService {

    public async execute(): Promise<Category[]> {
        let categoryRepository = getCustomRepository(CategoryRepository)
        let categorys = await categoryRepository.find();
        return categorys
    }
}

export default ListCategoryService