var todo_model_1 = require("./todo-model");
function todoState(state, data) {
    if (state === void 0) { state = {
        todos: [],
        statusFilter: "started" }; }
    if (data === void 0) { data = {
        type: "",
        payload: ""
    }; }
    // Redux reducers typically use a switch statement
    // to determine how to handle a given action
    switch (data.type) {
        case 'ADD_TODO':
            var newTodo = Object.assign(new todo_model_1.TodoModel(), data.payload);
            console.log('add item state');
            state.todos = state.todos.concat([
                newTodo
            ]);
            console.log(state.todos);
            return state;
        case 'TOGGLE_TODO':
            var todo = data.payload;
            var i = state.todos.indexOf(todo);
            var status_1 = todo.status == "started" ? "completed" : "started";
            var toggledTodo = Object.assign(new todo_model_1.TodoModel(), todo, { status: status_1 });
            state.todos = state.todos.slice(0, i).concat([
                // check items before
                toggledTodo
            ], state.todos.slice(i + 1));
            console.log('toggle state.todos');
            console.log(state.todos);
            return state;
        case 'INIT':
            console.log('loaded initial state');
            state.todos = data.payload;
            return state;
        case 'TODO_STATUS':
            var newStatus = Object.assign({}, state, {
                statusFilter: data.payload
            });
            console.log('status state change');
            console.log(newStatus);
            return state.statusFilter = newStatus;
        default:
            return state;
    }
}
exports.todoState = todoState;
