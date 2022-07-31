import { useTodos } from "../hook";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";




export const TodoApp = () => {

 const { todos, todosCount, pendingTodosCount,  handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos()
// todos.filter(todo => !todo.done).length
  return (
    <>
      <h1>
        TodoApp {todosCount}, <small> pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/*  TodoList*/}
          <TodoList
            todos={todos}
            onDeleteTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={(id) => handleToggleTodo(id)}
          />
        </div>
        <div className="col-5"></div>
        <h4>Agregar TODO</h4>
        <hr />

        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
}

