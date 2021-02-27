export const filterTodos = (type, todos) => {
  switch (type) {
    case "completed":
      return todos.filter(todo => todo.done === true);
    case "active":
      return todos.filter(todo => todo.done === false);
    default:
      return todos;
  }
};