import {createSlice} from '@reduxjs/toolkit';
const initialState ={
    user:[],
};
export const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        setUsers:(state,action)=>{
         action.user =[...action.user,action.state]   
        },
        deleteUser:(state,action)=>{
            state.user=state.user.filter(
            (user,index)=>index !== action.payload);
            },
        }
    })
export const {setUsers,deleteUser}=userSlice.actions
export default userSlice.reducer;