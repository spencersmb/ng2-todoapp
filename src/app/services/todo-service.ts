import {Injectable, Input} from "angular2/core";
import {ITodoModel} from "../components/todo/todo-model";
import {TodoModel} from "../components/todo/todo-model";
import {combineReducers, createStore, Store} from 'redux';
import {todoState} from "../components/todo/todo-redux"

//redux v2
//export const TodoStore: Store = createStore(todoState);
//export const toggleTodo: Function = (index: Number) : void => {
//    TodoStore.dispatch({
//        type: 'TOGGLE_TODO',
//        payload: index
//    })
//};

@Injectable()
export class TodoService{
    //no redux
    //public todos: ITodoModel[];
    @Input() status;
    //redux v1
    public todoStore: Store = createStore(todoState);
    public state = this.todoStore.getState();


    constructor(){
        //redux v1
        this.todoStore.subscribe(() => {
            this.state = this.todoStore.getState();
        });

        //noredux
        //this.todos = this.getTodos();
    }
    addTodo(todo: ITodoModel): void{
        //create new array, copy over existing todos, and then add the new item on the end.
        //this.todos = [...this.todos, todo];

        this.todoStore.dispatch({
            type: 'ADD_TODO',
            payload: todo
        });

    }
    getTodos(): ITodoModel[]{
        return [
            new TodoModel("eat"),
            new TodoModel("sleep"),
            new TodoModel("code")
        ];
    }
    //redux v1
    toggleTodo(todo: ITodoModel): void{
        this.todoStore.dispatch(
            {
                type: 'TOGGLE_TODO',
                payload: todo
            });
        //this.todos = this.todoStore.getState();
    }
    //redux v1
    loadTodos(): void{

        this.todoStore.dispatch(
            {
                type:'INIT',
                payload: this.getTodos(),
                status: "started"
            });
        console.log(this.todoStore.getState());

    }

    //redux v2
    //toggleTodo(todo: ITodoModel): void{
    //    TodoStore.dispatch(
    //        {
    //        type: 'TOGGLE_TODO',
    //        payload: todo
    //    });
    //    //this.todos = this.todoStore.getState();
    //}

    //no redux
    //toggleTodo(todo: ITodoModel): void{
    //
    //    const i = this.todos.indexOf(todo);
    //
    //    const status = todo.status == "started" ? "completed" : "started";
    //
    //    // assign a new object, assign it a todoitem and assign the new properties
    //    // this is the right way to change state
    //    const toggledTodo = Object.assign({}, todo, {status});
    //
    //    //reconstruct array based off of the clicked item.
    //    //ex: item 0 was clicked, so the array slices 1 and 2 and returns the new array automagically because the slice method was called on the array.
    //    this.todos = [
    //        //... = spread operator - bascially loops through the array
    //        ...this.todos.slice(0,i), // check items before
    //        toggledTodo, // clicked item
    //        ...this.todos.slice(i + 1) // check items after
    //    ];
    //}
}
