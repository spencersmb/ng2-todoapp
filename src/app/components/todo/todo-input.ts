import {Component} from "angular2/core";
import {TodoService} from "../../services/todo-service";
import {TodoModel} from "./todo-model";

@Component({
    selector: 'todo-input',
    templateUrl:'app/components/todo/todo-input.html',
})

export class TodoInput{
    //two way bind input to this #todoModel
    //then create a new model and the ngModel is set to
    // todoModel.title
    todoModel: TodoModel = new TodoModel();


    constructor(public todoService: TodoService){

    }
    onSubmit(): void{
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }


}