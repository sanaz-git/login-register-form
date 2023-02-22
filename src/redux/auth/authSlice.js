import { createSlice } from "@reduxjs/toolkit";

const initialState={}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducer:{}
})

export const authAction = authSlice.actions
export default authSlice.reducer