import { getCustomRepository } from "typeorm";
import Category from "../typeorm/entities/Category";
import CategoryRepository from "../typeorm/repositories/CategoryRepository";
import AppError from '../../../errors/AppError'

interface IRequest {
    id: string
}

class ShowCategoryService {

    public async execute({id}: IRequest): Promise<Category> {
        let categoryRepository = getCustomRepository(CategoryRepository)
        let category = await categoryRepository.findOne(id)
        if (!category) {
            throw new AppError('Categoria não existe')
        }
        return category
    }
}

export default ShowCategoryService