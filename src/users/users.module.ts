import { Module } from '@nestjs/common';
import { UesrsController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
    controllers: [UesrsController],
    providers: [UsersService]
})
export class UsersModule {}
