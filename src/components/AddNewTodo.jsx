import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddNewTodo() {
    const [title, setTitle] = useState("")
    const dispath = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!title) return;
        dispath(addTodo({title}))
        setTitle("")
    }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="flex items-center p-5 gap-x-2 mb-5">
       <div className="flex flex-col gap-y-2">
            <button 
            className="bg-indigo-600 p-4 rounded text-indigo-950"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>

        <input
        value={title}
        onChange={e => setTitle(e.target.value)} 
        type="text" 
        placeholder="اینجا بنویسید..." 
        className="border border-indigo-500 bg-transparent w-full py-6 px-2 rounded-lg text-sm text-indigo-400"
        />

    </form>
  )
}

export default AddNewTodo
