import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import Category from "../typeorm/entities/Category"
import CategoryRepository from "../typeorm/repositories/CategoryRepository"

//cria um tipo de dado
interface IRequest {
    id: string
    name: string
}

class UpdateCategoryService {

    public async execute({id, name}: IRequest): Promise<Category> {
        const categoryRepository = getCustomRepository(CategoryRepository)
        // verifica se o pedido existe
        const categoryExist = await categoryRepository.findOne(id)
        if (!categoryExist){
            // sai do método
            throw new AppError('Categoria não existe', 400)
        }
        // verifica se o nome alterado já existe no BD
        const idExist = await categoryRepository.findOne(id)
        if (idExist){
            // sai do método
            throw new AppError('Categoria já existe', 400)
        }
        // vamos atualizar
        categoryExist.id = id
        categoryExist.name = name
        
        await categoryRepository.save(categoryExist)
        return categoryExist
    }
}

export default UpdateCategoryService