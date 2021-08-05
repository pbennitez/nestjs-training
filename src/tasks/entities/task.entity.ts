
export interface ITask {
    id: number;
    title: string;
    description?: string;
    completed?: boolean;
    favorites?: number
    user: number
}

export class Task implements ITask {
    id: number;
    title: string;
    description?: string;
    completed = false;
    favorites = 0;
    user: number;

    constructor(data: ITask) {
        Object.assign(this, data);
    }
}