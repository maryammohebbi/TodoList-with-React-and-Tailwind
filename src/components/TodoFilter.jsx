import React from 'react'

function TodoFilter({filter, setFilter}) {
    const handleFilter = (value) =>{
        setFilter(value)
    }

  return (
    <div className="flex items-center justify-center gap-x-4 mb-9">
        <button 
            onClick={()=> handleFilter("all")}
            value="all" 
            className={` ${filter === "all" && "active"}  bg-indigo-500 border-2 border-indigo-800 p-2 rounded-lg text-sm md:p-2.5 md:text-base text-indigo-950 hover:bg-indigo-600 transition-all duration-500 ease-in`}>
            همه
        </button>
        <button 
            onClick={()=> handleFilter("completed")}
            value="completed" 
            className={`${filter === "completed" && "active"} bg-indigo-500 border-2 border-indigo-800 p-2 rounded-lg text-sm md:p-2.5 md:text-base text-indigo-950 hover:bg-indigo-600 transition-all duration-500 ease-in`}>
                انجام شده‌ها
        </button>
        <button 
            onClick={()=> handleFilter("uncompleted")}
            value="uncompleted" 
            className={`${filter === "uncompleted" && "active"} bg-indigo-500 border-2 border-indigo-800 p-2 rounded-lg text-sm md:p-2.5 md:text-base text-indigo-950 hover:bg-indigo-600 transition-all duration-500 ease-in`}>
            انجام نشده‌ها
        </button>
    </div>   
  )
}

export default TodoFilter
