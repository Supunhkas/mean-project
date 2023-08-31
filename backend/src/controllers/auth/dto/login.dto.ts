import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class LoginDto {


    @IsNotEmpty()
    @IsEmail({}, {message: "Please Enter Correct Email"})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password:  string;
}
