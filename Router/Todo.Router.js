const express = require("express");
const { getTodos, postTodos, updateTodos, deleteTodos } = require("../Controller/Todo.Controller");
const todoRouter = express.Router();

todoRouter.post("/create", postTodos())

todoRouter.get("/get", getTodos())

todoRouter.patch("/update/:id", updateTodos())

todoRouter.delete("/delete/:id", deleteTodos())

module.exports = {
    todoRouter
}
