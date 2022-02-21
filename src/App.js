import './App.css';
import React, { useState} from 'react'; 

function App() {

  const [todos, setToDo] = useState([
  { name: "Buy shopping", priority: false },
  { name: "Cheese", priority: true },
  { name: "Beans", priority: false },
]);
const [newToDo, setNewTodo] = useState ("")

const todoNodes = todos.map((todo, index) => {
  return(
    <li   key={index} 
          className = 
            {todo.priority 
                ? "priority" 
                : "not-priority"
            }>
              <span>{ todo.name } </span>
              { todo.priority 
              ? <span 
                  className = "priority">

                  </span> 
              : <span 
                  className = "not-priority">
                  </span>}

    </li> 
  )
})

const handleToDoInput = (event) => {
setNewTodo(event.target.value)}

const saveNewToDo = (event) => {
  event.preventDefault();
  const copyToDos = [...todos]
  copyToDos.push({name : newToDo, priority: false})
  setToDo(copyToDos)
  setNewTodo("")
}

return (
  <div className='App'>

    <h1> Get It Done, Son!</h1>
  <hr></hr>
    <form onSubmit={saveNewToDo}>
      <label htmlFor='new-todo'></label>
      <input id="new-todo"
      type="text" onChange={handleToDoInput} />
      <input type="submit"/>
      <input type="radio" />
    </form>
    <ul>
    {todoNodes}
    </ul>

  </div>
)
}
export default App;
