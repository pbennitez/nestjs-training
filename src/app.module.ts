import { HttpService, Module, HttpModule } from '@nestjs/common';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

import { SharedModule } from './shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './enviroments';
import config from './config'
import { get } from 'lodash';

export const MY_KEY = '123456'

/**
 * TAREA:
 *  Modelo de usuario
 *      - id
 *      - firstName: string
 *      - lastName: string
 *      - email: string
 *      - password: string
 *      - roles: string
 * 
 *  1. Crear un modulo que encaupsule la logica
 * para el manejo de usuarios en nuestra API REST
 *  buscar un usuario.
 *  buscar un usuario por email.
 *  crear un usuario.
 *  editar un usuario.
 *  reemplazar un usuario.
 *  eliminar un usuario.
 *  
 * 2. Crear un modulo global que administre
 * las tareas y los usuarios.
 *  Una tarea puede ser creada por un solo
 * usuario autor.
 *  Un usuario puede tener asignado una o más
 * tareas.
 *  Una tarea puede estar asignado a ninguno
 * o muchos usuarios.
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: get(enviroments, process.env.NODE_ENV, '.env'),
      load: [config],
      isGlobal: true,

      validationSchema: Joi.object({
        BY_VALUE: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        PORT: Joi.number().required(),
      }),
    }),
    UsersModule,
    TasksModule,
    HttpModule,
    SharedModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
        provide: 'BY_VALUE',
        useValue: MY_KEY,
    },
    {
        provide: 'TODOS',
        useFactory: async (http: HttpService) => {
            const todos = await http
                .get('https://jsonplaceholder.typicode.com/todos')
                .toPromise()
            
            console.log("🚀 ~ file: app.module.ts ~ line 55 ~ useFactory: ~ todos", todos.data.length)
            
            return todos.data
        },
        inject: [HttpService]
    }
  ],
})
export class AppModule {}
