import React, { useState } from "react";
import TodoList from './Todolist'

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: false }])
  return (
    <>
      <TodoList todos={todos}/>
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 Left to do</div>
    </>
  )
}

export default App;
