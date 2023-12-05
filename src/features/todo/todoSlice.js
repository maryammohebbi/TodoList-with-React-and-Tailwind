import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export const getAsyncTodos = createAsyncThunk("todos/getAsyncTodos", async (_, {rejectWithValue})=>{
    try {
        const {data} = await api.get("/todos")
        return data
    } catch (err) {
        return rejectWithValue(err.message)       
    }
})

export const addAsyncTodo = createAsyncThunk("todos/addAsyncTodo", async (payload, {rejectWithValue})=>{
    try {
        const {data} = await api.post("/todos", {
                id: Date.now(),
                createdAt: new Date().toISOString(),
                title: payload.title,
                isCompleted: false,
                isStared: false
        })
        return data
    } catch (err) {
        return rejectWithValue(err.message)       
    }
})

export const removeAsyncTodo = createAsyncThunk("todos/removeAsyncTodo", async (payload, {rejectWithValue})=>{
    try {
        await api.delete(`/todos/${payload.id}`)
        return {id: payload.id}
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export const toggleAsyncTodo = createAsyncThunk("todos/toggleAsyncTodo", async (payload, {rejectWithValue})=>{
    try {
        const {data} = await api.patch(`/todos/${payload.id}`, {
            isCompleted: payload.isCompleted
        })
        return data
    } catch (err) {
        return rejectWithValue(err.message)   
          
    }
})

export const starAsyncTodo = createAsyncThunk("todos/starAsyncTodo", async (payload, {rejectWithValue})=>{
    try {
        const {data} = await api.patch(`/todos/${payload.id}`, {
            isStared: payload.isStared
        })
        return data
    } catch (err) {
        return rejectWithValue(err.message)       
    }
})
export const editAsyncTodo = createAsyncThunk("todos/editAsyncTodo", async (payload, {rejectWithValue})=>{
    try {
        const {data} = await api.patch(`/todos/${payload.id}`, {
            title: payload.title
        })
        return data
    } catch (err) {
        return rejectWithValue(err.message)       
    }
})

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        loading: false,
        error: "",
    },

    extraReducers: (builder) => {
        builder
          .addCase(getAsyncTodos.pending, (state, action) => {
            state.loading = true;
            state.todos = [];
            state.error = "";
          })
          .addCase(getAsyncTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
            state.error = "";
          })
          .addCase(getAsyncTodos.rejected, (state, action) => {
            state.loading = false;
            state.todos = [];
            state.error = action.payload;
          })
          .addCase(addAsyncTodo.pending, (state, action) => {
            state.loading = true
          })
          .addCase(addAsyncTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos.push(action.payload)
          })
          .addCase(removeAsyncTodo.fulfilled, (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== Number(action.payload.id))
          })
          .addCase(removeAsyncTodo.rejected, (state, action) => {
            state.loading = false;
            state.todos = []
            state.error = action.payload
          })
          .addCase(toggleAsyncTodo.fulfilled, (state, action) => {
            const selectedTodo = state.todos.find(todo => todo.id === Number(action.payload.id))
            selectedTodo.isCompleted = action.payload.isCompleted
          })
          .addCase(starAsyncTodo.fulfilled, (state, action)=> {
            const selectedTodo = state.todos.find(todo=> todo.id === Number(action.payload.id))
            selectedTodo.isStared = action.payload.isStared
          })  
          .addCase(editAsyncTodo.fulfilled, (state, action)=> {
            const selectedTodo = state.todos.find(todo=> todo.id === Number(action.payload.id))
            selectedTodo.title = action.payload.title
          })        
      },
})

export default todoSlice.reducer



