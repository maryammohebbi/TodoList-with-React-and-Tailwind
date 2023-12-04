import TodoHeader from './components/TodoHeader'
import AddNewTodo from './components/AddNewTodo'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'

function App() {

  return (
      <div>
        <TodoHeader/>
        <section className="max-w-sm mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <AddNewTodo/>
            <TodoFilter/>  
            <TodoList/>
        </section>   
      </div>
  )
}

export default App
