import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          //aquí recibo 'todo' entero, luego en TodoItem buscaré 'description' a dentro de 'todo'
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </>
  );
};

