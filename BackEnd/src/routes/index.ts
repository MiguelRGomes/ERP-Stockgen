
import { Router } from "express";
import routerProduct from "../modules/products/routes/routes.product";
import routerUser from "../modules/users/routes/routes.user";
import routerSession from '../modules/users/routes/routes.session'
import routerRequests from "../modules/requests/routes/routes.requests";
import routerEmployee from "../modules/employee/routes/routes.employee";
import routerCategory from "../modules/category/routes/routes.category";

const router = Router()

// quem responde a rota /product é routerProduct
router.use('/product', routerProduct)

// quem responde a rota /product é routerProduct
router.use('/user', routerUser)

router.use('/request', routerRequests)

router.use('/employee', routerEmployee)

router.use('/category', routerCategory)

router.use('/session', routerSession)

router.use('/employee', routerSession)

router.get('/hello-word', (req, res) => {
  return res.send('Teste')
})
export default router