import { PartialType } from '@nestjs/mapped-types'
import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString, IsNotEmpty, IsOptional, IsEmail, ValidateNested } from 'class-validator'

class UserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;
}

export class CreateTasksDto {
    @IsString({
        message: "mas info"
    })
    @IsNotEmpty()
    readonly title: string

    @IsString()
    @IsOptional()
    readonly description: string

    @IsBoolean()
    @IsOptional()
    readonly completed: boolean

    @IsNumber()
    @IsOptional()
    readonly favorites: number
}

export class UpdateTasksDto extends PartialType(CreateTasksDto) {}
