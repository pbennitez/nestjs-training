import { Injectable, NotFoundException } from '@nestjs/common';
import { find, get, pullAt, isEmpty } from 'lodash';
import { User, IUser } from '../entities/user.entity';

@Injectable()
export class UsersService {
    users: IUser[] = [];

    create(data?: any) {
        data.id = this.users.length
        
        return this.users.push(new User(data));
    }

    find(filters: Partial<IUser> | string | string[]) {
        if (isEmpty(filters)) {
            return this.users
        }
        
        return find(this.users, filters);
    }

    findByEmail(email?: string) {
        return find(this.users, { email })
    }

    update(id?: any, data?: any) {
        if (id < 0 || this.users.length < id) {
            throw new NotFoundException()
        }
        
        const changes = Object.assign(this.users[id], data)
        
        return this.users.splice(id, 1, new User(changes))
    }

    replace(id?: any, data?: any) {
        if (id < 0 || this.users.length < id) {
            throw new NotFoundException()
        }
        
        return this.users.splice(id, 1, new User(data))
    }

    delete(id?: any) {
        if (id < 0 || this.users.length <= id) {
            throw new NotFoundException()
        }
        
        return pullAt(this.users, id)
    }
}
