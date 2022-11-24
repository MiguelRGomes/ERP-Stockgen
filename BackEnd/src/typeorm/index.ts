import {createConnection} from "typeorm"
import CreateUserService from "../modules/users/services/CreateUserService"

// cria a conexão com o banco de dados
createConnection().then(async () => {
  console.log(`Conectou ao banco de dados com sucesso`)
    try {
        const createService = new CreateUserService()
        await createService.execute({name: 'admin', email: 'admin@email.com', password: '1'})
        console.log("Admin created")
    } catch (e) {
    }
})