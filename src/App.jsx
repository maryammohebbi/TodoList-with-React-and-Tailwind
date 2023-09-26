import { useState } from 'react'
import TodoHeader from './components/TodoHeader'
import AddNewTodo from './components/AddNewTodo'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'


function App() {
  const [todos, setTodos] = useState([])
  const handleComplete = (e)=>{
    e.preventDefault();
    const todoId = Number(e.target.id);
    setTodos(prevTodos => prevTodos.map(todo => todo.id == todoId ? {...todo, isCompleted: !todo.isCompleted}: todo))
  }

  return (
    <div>
      <TodoHeader/>
      <section className="max-w-sm mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <AddNewTodo setTodos={setTodos}/>
          <TodoFilter/>  
          <TodoList todos={todos} onComplete={handleComplete}/>
      </section>
    
    </div>
  )
}

export default App
