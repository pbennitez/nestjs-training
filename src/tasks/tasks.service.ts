import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    create(data?: any) {
        return `create ${data || ''}`
    }

    find(filters?: any) {
        return `find ${filters || ''}`
    }

    findById(id?: any) {
        return `findById ${id || ''}`
    }

    update(id?: any, data?: any) {
        return 'update'
    }

    replace(id?: any, data?: any) {
        return 'replace'
    }

    delete(id?: any) {
        return 'delete'
    }
}
