
export interface IUser {
    id: number;
    firstName: string
    lastName?: string
    email: string
    password: string
    roles?: string[]
}

export class User implements IUser {
    id: number;
    firstName: string
    lastName?: string
    email: string
    password: string
    roles?: string[]

    constructor(data: IUser) {
        Object.assign(this, data);
    }
}