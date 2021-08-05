import { Body, Delete, HttpCode, Put, Query } from '@nestjs/common';
import { Param, ParseIntPipe } from '@nestjs/common';
import { Get, Patch, Post, HttpStatus } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CreateTasksDto, UpdateTasksDto } from '../dtos/tasks.dto';
import { ParseIntegerPipe } from '../pipes/parse-integer.pipe';
import { TasksService } from 'src/shared/services/tasks.service';

import { ApiTags } from '@nestjs/swagger'

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    create(@Body() data: CreateTasksDto) {
        return this.tasksService.create(data)
    }

    @Get()
    find(@Query() filters: any) {
        return this.tasksService.find(filters)
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.tasksService.findById(id)
    }

    @Patch(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    update(@Param('id', ParseIntegerPipe) id: number, @Body() data: UpdateTasksDto) {
        return this.tasksService.update(id, data)
    }

    @Put(':id')
    replace(@Param('id', ParseIntegerPipe) id: number, @Body() data: CreateTasksDto) {
        return this.tasksService.replace(id, data)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntegerPipe) id: number) {
        return this.tasksService.delete(id)
    }
}
