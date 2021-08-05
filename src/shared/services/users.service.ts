import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { find, pullAt, isEmpty, get } from 'lodash';
import { IUser, User } from 'src/users/entities/user.entity';

@Injectable()
export class UsersService {
    users: IUser[] = [];
    
    constructor(
      @Inject('TODO')
      private readonly value: string,
    ) {}

    getValue() {
      return this.value;
    }

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

    findById(id?: any) {
        if (id < 0 || this.users.length < id) {
            throw new NotFoundException()
        }
        
        return get(this.users, id)
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
