import { Injectable, NotFoundException } from '@nestjs/common';
import { find, get, pullAt, isEmpty } from 'lodash';
import { ITask, Task } from '../entities/task.entity';

@Injectable()
export class TasksService {
    tasks: ITask[] = [];

    create(data?: any) {
        data.id = this.tasks.length
        
        return this.tasks.push(new Task(data));
    }

    find(filters: Partial<ITask> | string | string[]) {
        if (isEmpty(filters)) {
            return this.tasks
        }
        
        return find(this.tasks, filters);
    }

    findById(id?: any) {
        if (id < 0 || this.tasks.length < id) {
            throw new NotFoundException()
        }
        
        return get(this.tasks, id)
    }

    update(id?: any, data?: any) {
        if (id < 0 || this.tasks.length < id) {
            throw new NotFoundException()
        }
        
        const changes = Object.assign(this.tasks[id], data)
        
        return this.tasks.splice(id, 1, new Task(changes))
    }

    replace(id?: any, data?: any) {
        if (id < 0 || this.tasks.length < id) {
            throw new NotFoundException()
        }
        
        return this.tasks.splice(id, 1, new Task(data))
    }

    delete(id?: any) {
        if (id < 0 || this.tasks.length <= id) {
            throw new NotFoundException()
        }
        
        return pullAt(this.tasks, id)
    }
}
