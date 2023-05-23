import { IsEmail, MinLength } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;

  //TODO: validation return 400 but save user anyway
  @MinLength(10)
  password: string;
}
