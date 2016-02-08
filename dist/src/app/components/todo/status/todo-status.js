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
var todo_service_1 = require("../../../services/todo-service");
var StatusSelector = (function () {
    function StatusSelector(todoService) {
        this.todoService = todoService;
        //select is the name of the event on the selector 'status-selector'
        this.select = new core_1.EventEmitter();
        this.statuses = ['started', 'completed'];
        this.stateStatus = {
            statusFilter: ''
        };
    }
    StatusSelector.prototype.ngOnInit = function () {
        //this tells it to fire immidiately
        this.emitFilter(this.statuses[0]);
        console.log('ngInit ' + this.stateStatus.statusFilter);
    };
    StatusSelector.prototype.emitFilter = function (value) {
        //this fires immidiatly on load - so we set it right away to a default "started" in the todoModel.ts
        //this also fires on select change for the filter to work
        this.select.emit(value);
        this.todoService.todoStore.dispatch({
            type: 'TODO_STATUS',
            payload: value,
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StatusSelector.prototype, "select");
    StatusSelector = __decorate([
        core_1.Component({
            selector: 'status-selector',
            template: '<div><select #sel (change)="emitFilter(sel.value)"><option *ngFor="#status of statuses">{{status}}</option></select>'
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], StatusSelector);
    return StatusSelector;
})();
exports.StatusSelector = StatusSelector;
