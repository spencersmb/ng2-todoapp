export interface ITodoModel{
    status: string;
    title: string;
}

export class TodoModel{

    public status: string = 'started';

    constructor(
        public title: string = ''
    ){}
}