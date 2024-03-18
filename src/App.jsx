import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(["se réveiller le matin"]) // initialisation de la liste des todos avec la valeur "test1"
  // addTodo function
  const addTodo = () => {
    setTodos([...todos, todo]) // ajoute la valeur de todo à la liste des todos
    // comme si on faisait todos.push(todo) mais en react on ne doit pas modifier directement les valeurs des states
    console.log(todos)
    setTodo('')
  }

  return (
    <>
    {/* ajout d'un todo */}
    <h2>Ajouter une tache</h2>
    <input type="text" className='form-control' value={todo} onChange={(e) => setTodo(e.target.value)} />
    <br />
    <button className='btn btn-primary' onClick={addTodo}>Ajouter</button>
    {/* affichage des todos */}
    <h2>Liste des taches</h2>
    <ul>
      {todos.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
{/*todos*/}

   
    </>
  )
}

export default App
