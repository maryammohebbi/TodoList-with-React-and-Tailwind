import TodoHeader from './components/TodoHeader'
import AddNewTodo from './components/AddNewTodo'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'

function App() {
  const [filter, setFilter] = useState("all")

  return (
      <div>
        <Toaster/>
        <TodoHeader/>
        <section className="max-w-sm mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <AddNewTodo/>
            <TodoFilter setFilter={setFilter} filter={filter}/>  
            <TodoList filter={filter}/>
        </section>   
      </div>
  )
}

export default App
