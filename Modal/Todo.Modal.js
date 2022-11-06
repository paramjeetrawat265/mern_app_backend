const mongoose = require("mongoose");
const todosSchema = mongoose.Schema({
    id: { type: Number },
    title: { type: String },
    status: { type: Boolean }
})

const TodosModal = mongoose.model("todos", todosSchema);

module.exports = {
    TodosModal
}