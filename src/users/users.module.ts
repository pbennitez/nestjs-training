import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { UesrsController } from './controllers/users.controller';

@Module({
    imports: [SharedModule],
    controllers: [UesrsController],
})
export class UsersModule {}
