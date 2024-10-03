import { createSlice } from "@reduxjs/toolkit"

const initialState={
  userName:''
}

const userSlice=createSlice({
  name:'user',
  initialState,
  reducers:{
    createUser(state,action){

      state.userName=action.payload

    }
  }
})

export const {createUser}=userSlice.actions

export default userSlice.reducer;