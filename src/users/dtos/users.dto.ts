import { PartialType, ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator'

export class CreateUsersDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
      description: 'Nombre del usuario',
      format: 'acii'
    })
    readonly firstName: string
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly lastName: string
    
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly password: string

    @IsString({
        each: true,
    })
    @IsOptional()
    @ApiProperty()
    readonly roles: string[]
}

export class UpdateUsersDto extends PartialType(CreateUsersDto) {}
