var TodoModel = (function () {
    function TodoModel(title) {
        if (title === void 0) { title = ''; }
        this.title = title;
        this.status = 'started';
    }
    return TodoModel;
})();
exports.TodoModel = TodoModel;
