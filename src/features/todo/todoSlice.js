import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        // loading: "false",
        todos: [],
        // error: "",
    },
    reducers: {
        addTodo: (state, action)=>{
            const newTodo = {
                id: Date.now(),
                createdAt: new Date().toISOString(),
                title: action.payload.title,
                isCompleted: false,
                isStared: false
            }
            state.todos.push(newTodo)
        },
        toggleTodo: (state, action)=>{
            const selectedTodo = state.todos.find(todo => todo.id === Number(action.payload.id))
            selectedTodo.isCompleted = !selectedTodo.isCompleted
        },
        starTodo: (state, action) => {
            const selectedTodo = state.todos.find(todo => todo.id === Number(action.payload.id))
            selectedTodo.isStared = !selectedTodo.isStared
        },
        deleteTodo: (state, action)=> {
            state.todos = state.todos.filter(todo => todo.id !== Number(action.payload.id))
        }
    }
})

export const {addTodo, toggleTodo, starTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer

