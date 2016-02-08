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
var todo_model_1 = require("./todo-model");
var TodoInput = (function () {
    function TodoInput(todoService) {
        this.todoService = todoService;
        //two way bind input to this #todoModel
        //then create a new model and the ngModel is set to
        // todoModel.title
        this.todoModel = new todo_model_1.TodoModel();
    }
    TodoInput.prototype.onSubmit = function () {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new todo_model_1.TodoModel();
    };
    TodoInput = __decorate([
        core_1.Component({
            selector: 'todo-input',
            templateUrl: 'app/components/todo/todo-input.html',
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoInput);
    return TodoInput;
})();
exports.TodoInput = TodoInput;
