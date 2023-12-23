import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import supabase from "../../supabase";

// const api = axios.create({
//     baseURL: "https://my-json-server.typicode.com/maryammohebbi/TodoList-with-React-and-Tailwind"
// })

// console.log(supabase);

export const getAsyncTodos = createAsyncThunk("todos/getAsyncTodos", async (_, {rejectWithValue})=>{
    try {
        // const {data} = await api.get("/todos")
        // return data
        const { data, error } = await supabase
          .from("todos")
          .select("*")

        return data;
    } catch (error) {
        return rejectWithValue(error.message)       
    }
})

export const addAsyncTodo = createAsyncThunk("todos/addAsyncTodo", async (payload, {rejectWithValue})=>{
    try {
        // const {data} = await api.post("/todos", {
        //         id: Date.now(),
        //         createdAt: new Date().toISOString(),
        //         title: payload.title,
        //         isCompleted: false,
        //         isStared: false
        // })
        // return data
        const { data, error } = await supabase
          .from("todos")
          .insert(
            {
              id: Date.now(),
              createdAt: new Date().toISOString(),
              title: payload.title,
              isCompleted: false,
              isStared: false,
            },
          )
          .select()
          
          return data[0]
    } catch (err) {
        return rejectWithValue(err.message)       
    }
})

export const removeAsyncTodo = createAsyncThunk("todos/removeAsyncTodo", async (payload, {rejectWithValue})=>{
    try {
        // await api.delete(`/todos/${payload.id}`)
        // return {id: payload.id}
        const { error } = await supabase
          .from("todos")
          .delete()
          .eq("id", payload.id)

        return { id: payload.id };
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export const toggleAsyncTodo = createAsyncThunk("todos/toggleAsyncTodo", async (payload, {rejectWithValue})=>{
    try {
        // const {data} = await api.patch(`/todos/${payload.id}`, {
        //     isCompleted: payload.isCompleted
        // })
        // return data
        const { data, error } = await supabase
          .from("todos")
          .update({ isCompleted: payload.isCompleted })
          .eq("id", payload.id)
          .select()

        return data;
    } catch (err) {
        return rejectWithValue(err.message)   
          
    }
})

export const starAsyncTodo = createAsyncThunk("todos/starAsyncTodo", async (payload, {rejectWithValue})=>{
    try {
        // const {data} = await api.patch(`/todos/${payload.id}`, {
        //     isStared: payload.isStared
        // })
        // return data
        const { data, error } = await supabase
          .from("todos")
          .update({ isStared: payload.isStared })
          .eq("id", payload.id)
          .select()

        return data;
    } catch (err) {
        return rejectWithValue(err.message)       
    }
})
export const editAsyncTodo = createAsyncThunk("todos/editAsyncTodo", async (payload, {rejectWithValue})=>{
    try {
        // const {data} = await api.patch(`/todos/${payload.id}`, {
        //     title: payload.title
        // })
        // return data
        const { data, error } = await supabase
          .from("todos")
          .update({ title: payload.title })
          .eq("id", payload.id)
          .select()

        return data;
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
            const selectedTodo = state.todos.find(todo => todo.id === Number(action.payload[0].id))
            selectedTodo.isCompleted = action.payload[0].isCompleted
          })
          .addCase(starAsyncTodo.fulfilled, (state, action)=> {
            const selectedTodo = state.todos.find(todo=> todo.id === Number(action.payload[0].id))
            selectedTodo.isStared = action.payload[0].isStared
          })  
          .addCase(editAsyncTodo.fulfilled, (state, action)=> {
            const selectedTodo = state.todos.find(todo=> todo.id === Number(action.payload[0].id))
            selectedTodo.title = action.payload[0].title
          })        
      },
})

export default todoSlice.reducer



