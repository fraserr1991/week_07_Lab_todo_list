import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [todos, setTodos] = useState( [
    {id: 1, task: "Buy shopping"}, 
    {id: 2, task: "Clean bathroom"},
    {id: 3, task: "Car's MOT"}
  ]
  )
  const [newTask, setNewTask] = useState(""
  )

  const shoppingListItems = todos.map((todo) => {
    return (
    <li key={todo.id}>
      {todo.task}
    </li>
    )
  })

  const handleTaskInput = (evt) => {
    setNewTask(evt.target.value)
  }

  const addTask = evt => {
    evt.preventDefault()
    const newTaskObject = {id: Date.now(), task: newTask}
    const newListOfITems = [...todos, newTaskObject]
    setTodos(newListOfITems)
    setNewTask("")
  }

  

  return (
    <main>
      <header>To do list</header>
      <ul>
        {shoppingListItems}
      </ul>
      <form onSubmit={addTask}>
        <label htmlFor="new-task">new task</label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}></input>
        <input type="submit" value="Save new task"></input>
      </form>
    </main>
  );
}

// const saveNewItem = (evt) => {
//   evt.preventDefault()
//   const newItemObject = {id: Date.now(), name: newItem}
//   const newListOfItems = [...items, newItemObject]
//   setItems(newListOfItems)
//   setNewItem("")
// }

export default App;
