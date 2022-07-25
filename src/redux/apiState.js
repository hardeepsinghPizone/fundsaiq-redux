import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const addToDoList = createAsyncThunk(
    'todo/addToDoList',
    async (data) => {
        // console.log(data)
        return {
            id: Math.floor(Math.random() * 1000000000000000) + 1,
            todo: data
        }
        // const response = await fetch(`https://qapi.fundsaiq.com/getAllSettings/${data}`);
        // const formattedResponse = await response.json();
        // return formattedResponse;
    }
)
export const removeToDoList = createAsyncThunk(
    'todo/removeToDoList',
    async (data) => {
        // console.log(data)
        return data
        // const response = await fetch(`https://qapi.fundsaiq.com/getAllSettings/${data}`);
        // const formattedResponse = await response.json();
        // return formattedResponse;
    }
)
export const editToDoList = createAsyncThunk(
    'todo/editToDoList',
    async (data) => {
        // console.log(data)
        return data
        // const response = await fetch(`https://qapi.fundsaiq.com/getAllSettings/${data}`);
        // const formattedResponse = await response.json();
        // return formattedResponse;
    }
)
export const undo = createAsyncThunk(
    'todo/undo',
    async (data) => {
        // console.log(data)
        return data
        // const response = await fetch(`https://qapi.fundsaiq.com/getAllSettings/${data}`);
        // const formattedResponse = await response.json();
        // return formattedResponse;
    }
)

export const apiSlice = createSlice({
    name: 'todo',
    initialState: {
        history: [],
        listData: [],
        isLoading: false
    },
    extraReducers: {
        [addToDoList.fulfilled]: (state,action) => {
         var oldData = state.listData
         state.listData = [...oldData,action.payload];
         state.listData = [...oldData,action.payload]
         state.isLoading = false;
        },
        [removeToDoList.fulfilled]: (state,action) => {
         var oldData = state.listData.filter((elem)=>elem.id !== action.payload)
         state.listData = [...oldData];
         state.isLoading = false;
        },
        [editToDoList.fulfilled]: (state,action) => {
         var oldData = state.listData.filter((elem)=>{
            if(elem.id === action.payload.id){
                elem.todo = action.payload.todo
            }
            return elem
         })
         
         state.listData = [...oldData];
         state.isLoading = false;
        },
        [undo.fulfilled]: (state,action) => {
            var oldData = state.listData
            const previous = oldData[oldData.length - 1]
            const newPast = oldData.slice(0, oldData.length - 1)
            state.listData = [...newPast]
         
        },
    }
});

export default apiSlice.reducer;