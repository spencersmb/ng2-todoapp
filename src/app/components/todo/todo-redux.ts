import {combineReducers, createStore, Store} from 'redux';
import {ITodoModel} from "./todo-model";
import {TodoModel} from "./todo-model";

//testing data
//const initialState = [
//    {title: "eat", status: 'started'},
//    {title: "sleep", status: 'started'},
//    {title: "code", status: 'started'}
//];
interface IState{
    todos: ITodoModel[],
    statusFilter: string;
}
interface IData{
    type: string;
    payload: any;
}

export function todoState (
    state: IState = {
        todos: [],
        statusFilter: "started"},
    data: IData = {
        type: "",
        payload:""
    }
)
{
    // Redux reducers typically use a switch statement
    // to determine how to handle a given action
    switch (data.type) {
        case 'ADD_TODO':
            const newTodo = Object.assign(new TodoModel(), data.payload);

            console.log('add item state');
            state.todos = [
                ...state.todos,
                newTodo
            ];

            console.log(state.todos);

            return state;

        case 'TOGGLE_TODO':

            const todo: ITodoModel = data.payload;

            const i = state.todos.indexOf(todo);

            const status = todo.status == "started" ? "completed" : "started";

            const toggledTodo:ITodoModel = Object.assign(new TodoModel(), todo, {status});

            state.todos = [
                //... = spread operator - bascially loops through the array
                ...state.todos.slice(0,i), // check items before
                toggledTodo, // clicked item
                ...state.todos.slice(i + 1) // check items after
            ];

            console.log('toggle state.todos');
            console.log(state.todos);

            return state;


        case 'INIT':
            console.log('loaded initial state');
            state.todos = data.payload;
            return state;

        case 'TODO_STATUS':

            const newStatus = Object.assign({}, state, {
                statusFilter: data.payload
            });
            console.log('status state change');
            console.log(newStatus);

            return state.statusFilter = newStatus;

        default:
            return state;
    }
}
