import { CustomError, RegisterUserDto, UserEntity } from "../../domain";
import { AuthDataSource } from "../../domain/datasources/auth.datasource";

export class AuthDataSourceImpl implements AuthDataSource{

    async register(registerDTO: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password} = registerDTO


        try {

           return new UserEntity(
            '1',
            name,
            email,
            password,
            ['ADMIN_ROLE']
           )

        } catch (error) {
            if( error instanceof CustomError ){
                throw error
            }
            throw CustomError.internalServer();

        }
        //throw new Error("Method not implemented.");
    }
    
}