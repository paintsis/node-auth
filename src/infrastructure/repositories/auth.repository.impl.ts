import { AuthDataSource, AuthRepository, RegisterUserDto, UserEntity } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository{
    constructor(
        private readonly authDataSource: AuthDataSource
    ){}

    register(registerDTO: RegisterUserDto): Promise<UserEntity> {
        
        return this.authDataSource.register(registerDTO)
        //throw new Error("Method not implemented.");
    }

}


//g3zf3cm84zss0gnjjhnH16pn4m3kdH