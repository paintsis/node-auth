import exp from 'constants';
import express, { Router } from 'express'

interface Options {
    port?: number;
    routes: Router

}


export class Server{

public readonly app = express()
private readonly port : number;
private readonly routes : Router;
    
constructor(option: Options){
        const { port=3100, routes } = option

        this.port = port
        this.routes = routes
    }

    async start(){
        //Middlewares
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        //Usar las rutas
        this.app.use(this.routes)

        this.app.listen(this.port, ()=>{
            console.log('Server runn in port 3000')
        })
    }
}