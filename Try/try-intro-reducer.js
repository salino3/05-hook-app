

const initialState = [{
    id: 1,
    todo: 'recolectar la piedra del Alma',
    done: false
}] 

 const todoReducer = ( state = initialState, action = {}) => {

   if (action.type === '[TODO] add todo'){
    return [...state, action.payload ]
   }

   return state;
 };

let todos = todoReducer()

//

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log({state: todos})

// pruebo yo
const nuevaTodo = {
  id: 3,
  todo: "escalar el monte",
  done: false,
  tiempo:  `${2} años`
};

const add3ºaction = {
  type: "[TODO] add todo",
  payload: nuevaTodo,
};



todos = todoReducer(todos, add3ºaction)

console.log({state: todos})





