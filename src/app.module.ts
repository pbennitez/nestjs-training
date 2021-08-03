import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

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
  imports: [UsersModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
