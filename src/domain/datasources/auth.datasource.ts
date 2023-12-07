import { UserEntity } from "../entities/user.entity";
import { RegisterUserDto } from '../dtos/auth/register-user.dto';

export abstract class AuthDataSource {
    //abstract login()
    
    abstract register( registerDTO: RegisterUserDto  ): Promise <UserEntity>
}