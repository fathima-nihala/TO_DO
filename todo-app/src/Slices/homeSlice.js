import { createSlice } from "@reduxjs/toolkit";


const toDoTask = createSlice({
    name:'Todo-Works',
    initialState:{
       loading:false,
       works:{}
    },
    reducers:{
        
    }
})
//export const { funcions } =toDoTask.actions
export default toDoTask.reducer