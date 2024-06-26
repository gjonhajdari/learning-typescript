"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (response) {
    var todo = response.data;
    // const { ID, title: Title, finished } = todo;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, completed, title);
});
var logTodo = function (id, title, completed) {
    console.log("\n\t\tThe Todo with ID: ".concat(id, "\n\t\tHas a title of: ").concat(title, "\n\t\tIs it finished? ").concat(completed, "\n\t"));
};
