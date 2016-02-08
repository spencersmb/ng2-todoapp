var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var todo_service_1 = require("../../services/todo-service");
var todo_item_render_1 = require("./todo-item-render");
var status_pipe_1 = require("./status/status-pipe");
//redux v2
//import {toggleTodo} from "../../services/todo-service";
//import {TodoStore} from "../../services/todo-service";
var TodoList = (function () {
    function TodoList(todoService) {
        this.todoService = todoService;
        //init todos state
        //redux v1
        this.todoService.loadTodos();
        //redux v2
        //this.store.subscribe(() => {
        //    this.todos = this.store.getState();
        //    console.log(this.store.getState());
        //})
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "status");
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: 'app/components/todo/todo-list.html',
            directives: [todo_item_render_1.TodoItemRender],
            pipes: [status_pipe_1.StartedPipe]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;
