import React from 'react'

function TodoFilter() {

  return (
    <div className="flex items-center justify-center gap-x-4 mb-9">
        <FilterAllBtn/>

        <FilterCompletedBtn />
         
        <FilterUncompletedBtn/>
    </div>   
  )
}

export default TodoFilter

function FilterAllBtn(){
    return (
        <button value="all" className="active bg-indigo-500 border-2 border-indigo-800 p-2 rounded-lg text-sm md:p-2.5 md:text-base text-indigo-950 hover:bg-indigo-600 transition-all duration-500 ease-in">همه</button>
    )
}

function FilterCompletedBtn(){
    return(
        <button value="completed" className="bg-indigo-500 border-2 border-indigo-800 p-2 rounded-lg text-sm md:p-2.5 md:text-base text-indigo-950 hover:bg-indigo-600 transition-all duration-500 ease-in">انجام شده‌ها</button>
    )
}

function FilterUncompletedBtn(){
    return(
        <button value="uncompleted" className="bg-indigo-500 border-2 border-indigo-800 p-2 rounded-lg text-sm md:p-2.5 md:text-base text-indigo-950 hover:bg-indigo-600 transition-all duration-500 ease-in">انجام نشده‌ها</button>
    )
}