import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDataSourceImpl, AuthRepositoryImpl } from "../../infrastructure";

export class AuthRoutes {
    static get routes():Router {
        const router = Router()

        
        const database = new AuthDataSourceImpl()
        const authRepository = new AuthRepositoryImpl(database)
        const controller = new AuthController(authRepository);

        //Definicion de rutas
        router.post('/login', controller.loginUser)

        router.post('/register', controller.registerUser)

        //router.use('/api/auth')
        //router.use()
        return router
    }
}