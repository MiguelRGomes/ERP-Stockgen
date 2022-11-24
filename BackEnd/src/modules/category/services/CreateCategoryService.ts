import { getCustomRepository } from "typeorm";
import Category from "../typeorm/entities/Category";
import CategoryRepository from "../typeorm/repositories/CategoryRepository";
import AppError from '../../../errors/AppError'

// vamos criar um tipo de dados em TS com interface
interface IRequest {
    id: string;
    name: string;
}

class CreateCategoryService {

    // cria um método assíncrono que executa a inserção
    // método precisa promoter que irá retornar um produto
    public async execute({id, name}: IRequest): Promise<Category> {
        
        // obter o repositório de Category
        const categoryRepository = getCustomRepository(CategoryRepository)
        // criando uma regra de negócio - consulta pedido do mesmo funcionario
        const categoryExist = await categoryRepository.findOne({name});
        if (categoryExist){
            // vamos lançar uma exceção
            throw new AppError('Já existe uma categoria cadastrada com este nome')
        }
        // vem aqui somente se não tem produto com o nome criado
        const novo = categoryRepository.create({
            id, name
        })
        // EFETIVAMENTE SALVAMOS NO BD
        await categoryRepository.save(novo)
        return novo
    }

}

export default CreateCategoryService