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
var todo_model_1 = require("../components/todo/todo-model");
var redux_1 = require('redux');
var todo_redux_1 = require("../components/todo/todo-redux");
//redux v2
//export const TodoStore: Store = createStore(todoState);
//export const toggleTodo: Function = (index: Number) : void => {
//    TodoStore.dispatch({
//        type: 'TOGGLE_TODO',
//        payload: index
//    })
//};
var TodoService = (function () {
    function TodoService() {
        var _this = this;
        //redux v1
        this.todoStore = redux_1.createStore(todo_redux_1.todoState);
        this.state = this.todoStore.getState();
        //redux v1
        this.todoStore.subscribe(function () {
            _this.state = _this.todoStore.getState();
        });
        //noredux
        //this.todos = this.getTodos();
    }
    TodoService.prototype.addTodo = function (todo) {
        //create new array, copy over existing todos, and then add the new item on the end.
        //this.todos = [...this.todos, todo];
        this.todoStore.dispatch({
            type: 'ADD_TODO',
            payload: todo
        });
    };
    TodoService.prototype.getTodos = function () {
        return [
            new todo_model_1.TodoModel("eat"),
            new todo_model_1.TodoModel("sleep"),
            new todo_model_1.TodoModel("code")
        ];
    };
    //redux v1
    TodoService.prototype.toggleTodo = function (todo) {
        this.todoStore.dispatch({
            type: 'TOGGLE_TODO',
            payload: todo
        });
        //this.todos = this.todoStore.getState();
    };
    //redux v1
    TodoService.prototype.loadTodos = function () {
        this.todoStore.dispatch({
            type: 'INIT',
            payload: this.getTodos(),
            status: "started"
        });
        console.log(this.todoStore.getState());
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoService.prototype, "status");
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
})();
exports.TodoService = TodoService;
