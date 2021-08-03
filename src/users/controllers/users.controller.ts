import { Body, Delete, HttpCode, ParseIntPipe, Put, Query } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Get, Patch, Post, HttpStatus } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CreateUsersDto, UpdateUsersDto } from '../dtos/users.dto';
import { IsEmailPipe } from '../pipes/is-email.pipe';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UesrsController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() data: CreateUsersDto) {
        return this.usersService.create(data)
    }

    @Get()
    find(@Query() filters: any) {
        return this.usersService.find(filters)
    }

    @Get(':email')
    findByEmail(@Param('email', IsEmailPipe) email: string) {
        return this.usersService.findByEmail(email)
    }

    @Patch(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateUsersDto) {
        return this.usersService.update(id, data)
    }

    @Put(':id')
    replace(@Param('id', ParseIntPipe) id: number,@Body() data: CreateUsersDto) {
        return this.usersService.replace(id, data)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id)
    }
}
