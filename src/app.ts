import {bootstrap} from 'angular2/platform/browser';
import {Component, View} from "angular2/core";
import {TodoInput} from "./app/components/todo/todo-input";
import {TodoService} from "./app/services/todo-service";
import {TodoList} from "./app/components/todo/todo-list";
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {StatusSelector} from "./app/components/todo/status/todo-status";

@Component({
    selector: 'app',
    templateUrl:'app/components/todo/todo-module.html',
    directives:[TodoInput, TodoList, StatusSelector],
    providers:[TodoService]
})
class App{}

bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
  .catch(err => console.error(err));