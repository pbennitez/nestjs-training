import { Module } from '@nestjs/common';
import { TasksService } from './services/tasks.service';
import { UsersService } from './services/users.service';

export const MY_KEY = '123456'

const delay = (t = 0) => new Promise((resolve) => setTimeout(resolve, t))

@Module({
  providers: [
    UsersService,
    TasksService,
    // {
    //     provide: AppService,
    //     useClass: AppService
    // },
    {
        provide: 'BY_VALUE',
        useValue: MY_KEY,
    },
    {
      provide: 'TODO',
      useFactory: async () => {

        await delay(1000)

        return [{
          title: '....',
        }]
      },
      inject: []
    }
  ],
  exports: [UsersService, TasksService]
})
export class SharedModule {}
