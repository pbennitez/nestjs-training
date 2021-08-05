import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { TasksController } from './controllers/tasks.controller';

@Module({
    imports: [SharedModule],
    controllers: [TasksController],
})
export class TasksModule {}
