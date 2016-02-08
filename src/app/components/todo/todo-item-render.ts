import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'todo-item-render',
    templateUrl:'app/components/todo/todo-item-render.html',
    styles: ['.completed{ text-decoration: line-through;}']
})

export class TodoItemRender{
    //take todoItem in from ngFor passing an item in
    @Input() todoItem;

    //pass in the index from the ngFor
    @Input() index;

    //setup for a custom event
    @Output() outputTodo = new EventEmitter();

    constructor(){

    }
}