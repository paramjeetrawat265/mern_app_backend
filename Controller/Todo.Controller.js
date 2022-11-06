const { TodosModal } = require("../Modal/Todo.Modal");

const getTodos = () => async (req, res) => {
    const todos = await TodosModal.find();
    res.send({ todos: todos });
}

const postTodos = () => async (req, res) => {
    const todos = new TodosModal(req.body);
    await todos.save();
    res.send("create working");
}

const updateTodos = () => async (req, res) => {
    const { id } = req.params;
    await TodosModal.replaceOne({ id: id }, req.body)
    res.send("Data Updated Successfully")
}

const deleteTodos = () => async (req, res) => {
    const { id } = req.params;
    await TodosModal.deleteOne({ id: id })
    res.send("Data Deleted Successfully")
}

module.exports = {
    getTodos,
    postTodos,
    updateTodos,
    deleteTodos
}