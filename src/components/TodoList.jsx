import React, { useEffect } from 'react'
import EditModal from './EditModal'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, starTodo, toggleTodo } from '../features/todo/todoSlice'
import { getAsyncTodos } from '../features/todo/todoSlice'
import { removeAsyncTodo } from '../features/todo/todoSlice'
import { toggleAsyncTodo } from '../features/todo/todoSlice'
import { starAsyncTodo } from '../features/todo/todoSlice'

function TodoList() {
    const {todos, loading, error} = useSelector(state => state.todos)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAsyncTodos())
    }, [])

  return (
    <div>
        <h1 className="text-indigo-400 text-md font-bold">وظایف امروز من:</h1>
        <div className="p-5">
            {
                loading ? (<p className='text-white font-bold text-right'>Loading...</p>) : error ? (<p>{error}</p>) :
                (todos.map(todo => (
                    <TodoItem key={todo.id} {...todo}/>
                )))
            }
        </div>
    </div>
  )
        }

export default TodoList

function TodoItem({id, title, createdAt, isCompleted, isStared}){
    const dispatch = useDispatch()
    return (
        <div className="bg-indigo-900 hover:bg-indigo-800 transition-all duration-400 ease-out p-2 rounded-xl relative mb-5">
            <div className="flex justify-between">               
                <div className="flex items-center justify-start gap-x-3 mb-2">
                    <button 
                    id={id}
                    onClick={()=> dispatch(toggleAsyncTodo({id, isCompleted: !isCompleted}))}
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pointer-events-none text-indigo-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>                                     
                    <p className={`text-indigo-100 text-sm md:text-md lg:text-lg ${isCompleted && "line-through opacity-40"}`}>
                        {title}
                    </p>
                </div>

                <button 
                id={id}
                className="text-indigo-500 mb-4 transition-all duration-400 ease-in-out"
                onClick={()=> dispatch(starAsyncTodo({id, isStared: !isStared}))}
                >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className={`${isStared && "activeStar"} w-6 h-6 pointer-events-none`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>  
                </button>                                                         
            </div>

            <div className="flex items-center justify-center gap-x-1">
                <div className="flex items-center gap-x-1 bg-indigo-700 p-1 rounded-lg">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 star-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>                                           
                    </span>
                    <span className="text-indigo-300 text-sm">{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
                </div>
                |
                <EditBtn key={id}/>

                <button 
                id={id} 
                onClick={()=> dispatch(removeAsyncTodo({id}))}
                className="delete-btn  flex items-center bg-indigo-700 p-2 rounded-lg hover:bg-red-900 transition-all duration-500 ease-out">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pointer-events-none w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>                          
                </button>
            </div>         
        </div>
    )
}

function EditBtn({id, title}){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div>
            <button 
                onClick={()=> setIsOpen((is) => !is)}
                id={id} 
                className="flex items-center bg-indigo-700 p-2 rounded-lg hover:bg-indigo-600 transition-all duration-400 ease-out">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pointer-events-none w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>                          
                </button>
                <EditModal key={id} onOpen={setIsOpen} open={isOpen} id={id} title={title}/>
        </div>
    )
}