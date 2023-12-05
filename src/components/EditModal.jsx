import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editAsyncTodo } from '../features/todo/todoSlice';

function EditModal({open, onOpen, id, title}) {
    if(!open) return null;
    const [editedTitle, setEditedTitle] = useState(title)
    const dispatch = useDispatch()

    const handleEdit = (e)=>{
        e.preventDefault()
        dispatch(editAsyncTodo({id, title: editedTitle}))
        onOpen(false)
    }

  return (
    <div>    
        <div 
        onClick={()=> onOpen(false)}
        className="blur-xl bg-indigo-800 opacity-70 fixed top-0 left-0 w-full h-full z-10">
        </div>

        <section 
        className="max-w-sm mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl z-20 fixed m-auto left-0 right-0 top-1/3">
            <form
            onSubmit={(e)=> handleEdit(e)} 
            autoComplete="off" 
            className="flex flex-col bg-indigo-950 w-full h-auto p-8 gap-y-14 rounded-xl shadow-xl">
                <h1 className="text-center text-indigo-500 text-xl font-bold">- ویرایش -</h1>
                <input
                value={editedTitle}
                onChange={(e)=>setEditedTitle(e.target.value)} 
                type="text" 
                className="border border-indigo-500 bg-indigo-900 w-full py-6 px-2 rounded-lg text-sm text-indigo-200"/>
                <button 
                    className="bg-indigo-600 border-2 border-indigo-800 p-2 rounded-lg text-sm md:p-2.5 md:text-base w-40 h-auto mx-auto text-indigo-950 font-bold hover:bg-indigo-600">
                    ذخیره تغییرات
                </button>
            </form>
        </section>
    </div>
  )
}

export default EditModal