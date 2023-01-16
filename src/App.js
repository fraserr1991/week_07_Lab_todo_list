import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [todos, setTodos] = useState( [
    {id: 1, task: "Buy shopping", priority: "high"}, 
    {id: 2, task: "Clean bathroom", priority: "high"},
    {id: 3, task: "Car's MOT", priority: "medium"}
  ]
  )
  const [newTask, setNewTask] = useState(""
  )
  
  const [priority, setPriority] = useState("")

  const shoppingListItems = todos.map((todo) => {
    return (
    <li key={todo.id}>
      {todo.task}<br></br>
      {todo.priority}
    </li>
    )
  })

  const handleTaskInput = (evt) => {
    setNewTask(evt.target.value)
  }

  const handlePriorityLevel = (evt) => {
    setPriority(evt.target.value)
  }

  // const setHighPriorityBold = (todo) => {
  //   if (todo.priority === "high")
  //     return 
  //   }



  const addTask = evt => {
    evt.preventDefault()
    const newTaskObject = {id: Date.now(), task: newTask, priority: priority}
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
        <br></br>
        <div>
        <ledgend>Priority</ledgend><br></br>
        <input type="radio" id="low_priority" name="priorityLevel" value="low" onChange={handlePriorityLevel}></input>
        <label htmlFor="low_priority">Low</label>
        <input type="radio" id="medium_priority" name="priorityLevel" value="medium" onChange={handlePriorityLevel}></input>
        <label htmlFor="medium_priority">Medium</label>
        <input type="radio" id="high_priority" name="priorityLevel" value="high" onChange={handlePriorityLevel}></input>
        <label htmlFor="high_priority">High</label>
        </div>
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
