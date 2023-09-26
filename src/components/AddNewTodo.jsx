import React from 'react'

function AddNewTodo() {
  return (
    <form action="submit" id="todo-form" autocomplete="off" className="flex items-center p-5 gap-x-2 mb-5">
       <div className="flex flex-col gap-y-2">
            <button id="add-todo__btn" action="" className="bg-indigo-600 p-4 rounded text-indigo-950">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </button>
        </div>

        <input id="todo-input" type="text" placeholder="اینجا بنویسید..." 
        className="border border-indigo-500 bg-transparent w-full py-6 px-2 rounded-lg text-sm text-indigo-400"/>

    </form>
  )
}

export default AddNewTodo


// function AddTodoBtn(){
//     return (
//         <div className="flex flex-col gap-y-2">
//             <button id="add-todo__btn" action="" className="bg-indigo-600 p-4 rounded text-indigo-950">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//                 </svg>
//                 </button>
//         </div>
//     )
// }

// function TodoInput(){
//     return (
//         <input id="todo-input" type="text" placeholder="اینجا بنویسید..." 
//         className="border border-indigo-500 bg-transparent w-full py-6 px-2 rounded-lg text-sm text-indigo-400"/>
//     )
// }