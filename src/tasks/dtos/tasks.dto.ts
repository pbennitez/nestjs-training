import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsNotEmpty, IsOptional } from 'class-validator'
export class CreateTasksDto {
    @IsString()
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

    @IsNumber()
    @IsNotEmpty()
    readonly user: number
}

export class UpdateTasksDto extends PartialType(CreateTasksDto) {}
