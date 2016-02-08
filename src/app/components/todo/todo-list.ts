import {Component, Input} from "angular2/core";
import {TodoService} from "../../services/todo-service";
import {TodoItemRender} from "./todo-item-render";
import {SearchPipe} from "./search/search-pipe";
import {ITodoModel} from "./todo-model";
import {StartedPipe} from "./status/status-pipe";

//redux v2
//import {toggleTodo} from "../../services/todo-service";
//import {TodoStore} from "../../services/todo-service";

@Component({
    selector: 'todo-list',
    templateUrl:'app/components/todo/todo-list.html',
    directives:[TodoItemRender],
    pipes:[StartedPipe]
})

export class TodoList{
//send service straight to the ngfor here and dont make a copy of the data or else it doesnt update live.

    //redux v2
    //store = TodoStore;
    //todos = this.store.getState();

    @Input() status;

    constructor(public todoService: TodoService){
        //init todos state
        //redux v1
        this.todoService.loadTodos();

        //redux v2
        //this.store.subscribe(() => {
        //    this.todos = this.store.getState();
        //    console.log(this.store.getState());
        //})
    }

    //redux v2
    //toggleTodo(index: number): void{
    //   console.log('toggle');
    //    toggleTodo(index);
    //}
}