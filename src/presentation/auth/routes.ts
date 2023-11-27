import { Router } from "express";
import { AuthController } from "./controller";

export class AuthRoutes {
    static get routes():Router {
        const router = Router()
        const controller = new AuthController

        //Definicion de rutas
        router.post('/login', controller.loginUser)

        router.post('/register', controller.registerUser)

        //router.use('/api/auth')
        //router.use()
        return router
    }
}