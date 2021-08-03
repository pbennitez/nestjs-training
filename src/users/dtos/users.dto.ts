import { PartialType } from '@nestjs/mapped-types'
import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator'

export class CreateUsersDto {
    @IsString()
    @IsNotEmpty()
    readonly firstName: string
    
    @IsString()
    @IsOptional()
    readonly lastName: string
    
    @IsEmail()
    @IsNotEmpty()
    readonly email: string
    
    @IsString()
    @IsNotEmpty()
    readonly password: string

    @IsString({
        each: true,
    })
    @IsOptional()
    readonly roles: string[]
}

export class UpdateUsersDto extends PartialType(CreateUsersDto) {}
