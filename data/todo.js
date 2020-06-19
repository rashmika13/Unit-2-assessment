const todos = [
  { id: 125223, todo: "Get Groceries", done: false },
  { id: 127904, todo: "Water plants", done: true },
  { id: 139608, todo: "Pay bills", done: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return todos.find((todo) => todo.id === parseInt(id));
}

function getAll() {
  return todos;
}

function create(todo) {
  todo.id = Date.now() % 1000000;
  todo.done = false;
  todos.push(todo);
}

function deleteOne(id) {
  const idx = todos.findIndex((todo) => todo.id === parseInt(id));
  todos.splice(idx, 1);
}
