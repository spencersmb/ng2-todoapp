import {Component, Output, EventEmitter} from "angular2/core";
import {TodoService} from "../../../services/todo-service";


@Component({
    selector: 'status-selector',
    template: '<div><select #sel (change)="emitFilter(sel.value)"><option *ngFor="#status of statuses">{{status}}</option></select>'
})

export class StatusSelector{
    //select is the name of the event on the selector 'status-selector'
    @Output() select = new EventEmitter();
    statuses: string[] = ['started', 'completed'];

    stateStatus = {
        statusFilter: ''
    };

    ngOnInit(){
        //this tells it to fire immidiately
        this.emitFilter(this.statuses[0]);
        console.log('ngInit ' + this.stateStatus.statusFilter);

    }

    constructor(public todoService: TodoService){

        //todoService.todoStore.subscribe(() => {
        //    this.stateStatus = todoService.todoStore.getState();
        //});

    }
    emitFilter(value): void {
        //this fires immidiatly on load - so we set it right away to a default "started" in the todoModel.ts
        //this also fires on select change for the filter to work
        this.select.emit(value);
        this.todoService.todoStore.dispatch(
            {
                type:'TODO_STATUS',
                payload: value,
            });
    }
}