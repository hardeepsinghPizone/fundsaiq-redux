import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllSetting = createAsyncThunk(
    'api/getAllSetting',
    async (data) => {
        const response = await fetch(`https://qapi.fundsaiq.com/getAllSettings/${data}`);
        const formattedResponse = await response.json();
        return formattedResponse;
    }
)

export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        apiData: [],
        isLoading: false
    },
    extraReducers: {
        [getAllSetting.fulfilled]: (state,action) => {
         state.apiData = action.payload;
         state.isLoading = false;
        }
    }
});

export default apiSlice.reducer;