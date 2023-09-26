import { useEffect, useState } from 'react'
import TodoHeader from './components/TodoHeader'
import AddNewTodo from './components/AddNewTodo'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'


function App() {
  const [todos, setTodos] = useState(()=> JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleComplete = (e)=>{
    e.preventDefault();
    const todoId = Number(e.target.id);
    setTodos(prevTodos => prevTodos.map(todo => todo.id == todoId ? {...todo, isCompleted: !todo.isCompleted}: todo))
  }

  const handleStar = (e)=>{
    const todoId = Number(e.target.id)
    setTodos(prevTodos => prevTodos.map(todo => todo.id == todoId ? {...todo, isStared: !todo.isStared}: todo))
  }

  const handleDelete = (id)=>{
    // const todoId = Number(e.target.id)
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <TodoHeader/>
      <section className="max-w-sm mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <AddNewTodo setTodos={setTodos}/>
          <TodoFilter/>  
          <TodoList todos={todos} onComplete={handleComplete} onStar={handleStar} onDelete={handleDelete}/>
      </section>
    
    </div>
  )
}

export default App
