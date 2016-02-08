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
var TodoItemRender = (function () {
    function TodoItemRender() {
        //setup for a custom event
        this.outputTodo = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoItemRender.prototype, "todoItem");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoItemRender.prototype, "index");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoItemRender.prototype, "outputTodo");
    TodoItemRender = __decorate([
        core_1.Component({
            selector: 'todo-item-render',
            templateUrl: 'app/components/todo/todo-item-render.html',
            styles: ['.completed{ text-decoration: line-through;}']
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItemRender);
    return TodoItemRender;
})();
exports.TodoItemRender = TodoItemRender;
