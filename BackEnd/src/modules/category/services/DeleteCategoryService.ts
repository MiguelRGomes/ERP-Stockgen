import { getCustomRepository } from "typeorm";
import CategoryRepository from "../typeorm/repositories/CategoryRepository";
import AppError from '../../../errors/AppError'

class DeleteCategoryService {

    public async execute(id: string) {

        const categoryRepository = getCustomRepository(CategoryRepository)
        const categoryExist = await categoryRepository.findOne(id)
        if (!categoryExist){
            throw new AppError('Categoria não existe', 400)
        }
        await categoryRepository.remove(categoryExist)
    }   
}

export default DeleteCategoryService