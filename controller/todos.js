var Todo = require("../data/todo");

module.exports = {
  index,
  create,
  delete: deleteTodo,
};

function index(req, res) {
  res.render("index", {
    time: req.time,
    todos: Todo.getAll(),
  });
}

function create(req, res) {
  Todo.create(req.body);
  res.redirect("/");
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect("/");
}
