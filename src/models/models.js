const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: {
        "type": Boolean,
        "default": false
    }
});


const Todo = mongoose.model("todoList", todoSchema);

module.exports = { Todo };