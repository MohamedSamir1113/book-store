import { createSlice } from "@reduxjs/toolkit";

const reportSlice=createSlice({
    name:"report",
    initialState:{logs:[]},
    reducers:{
        getReport(state,acion){
            state.logs.push(acion.payload)
        }
    }
})

export default reportSlice.reducer;
export const{getReport}=reportSlice.actions