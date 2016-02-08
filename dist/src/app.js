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
var browser_1 = require('angular2/platform/browser');
var core_1 = require("angular2/core");
var todo_input_1 = require("./app/components/todo/todo-input");
var todo_service_1 = require("./app/services/todo-service");
var todo_list_1 = require("./app/components/todo/todo-list");
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var todo_status_1 = require("./app/components/todo/status/todo-status");
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/components/todo/todo-module.html',
            directives: [todo_input_1.TodoInput, todo_list_1.TodoList, todo_status_1.StatusSelector],
            providers: [todo_service_1.TodoService]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
browser_1.bootstrap(App, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS])
    .catch(function (err) { return console.error(err); });
