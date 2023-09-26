import React from 'react'

function TodoFilter() {
  return (
    <div className="flex items-center justify-center gap-x-4 mb-9">
        <FilterAllBtn/>
        <FilterCompletedBtn/>
        <FilterUncompletedBtn/>
    </div>   
  )
}

export default TodoFilter

function FilterAllBtn(){
    return (
        <button className="filters active bg-indigo-500 border-2 border-indigo-800 p-2 rounded-lg text-sm md:p-2.5 md:text-base text-indigo-950 hover:bg-indigo-600 transition-all duration-500 ease-in" value="all">همه</button>
    )
}

function FilterCompletedBtn(){
    return(
        <button className="filters bg-indigo-500 border-2 border-indigo-800 p-2 rounded-lg text-sm md:p-2.5 md:text-base text-indigo-950 hover:bg-indigo-600 transition-all duration-500 ease-in" value="completed">انجام شده‌ها</button>
    )
}

function FilterUncompletedBtn(){
    return(
        <button className="filters bg-indigo-500 border-2 border-indigo-800 p-2 rounded-lg text-sm md:p-2.5 md:text-base text-indigo-950 hover:bg-indigo-600 transition-all duration-500 ease-in" value="uncompleted">انجام نشده‌ها</button>
    )
}