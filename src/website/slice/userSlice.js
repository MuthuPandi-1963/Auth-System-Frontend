import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ name, password ,email}, thunkAPI) => {
    try {
      // Replace with real API call
      const response =await  axios.post('/auth/login',{name,password,email})
      await new Promise((res) => setTimeout(res, 1000)); // simulate delay
       return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Something went wrong',e);
    }
  }
);
const initialState ={
    username:'',
    email:'',
    password:'',
    token:'',
    loading:false,
    error:null,
    isauthenticated:false,
};
export const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        setUsers:(state,action)=>{
         const {username,password,email,token}=action.payload;
         state.username=username,
         state.password=password,
         state.email=email,
         state.token=token,
         state.isauthenticated=true  
        },
        deleteUser:(state,action)=>{
            state.user=state.username.filter(
            (email,index)=>index !== action.payload);
            },
            logout:(state)=>{
              state.username="";
              state.password=" ";
              state.email=" ";
              state.isauthenticated=false,
              state.loading=false,
              state.error=null
            },
        }
    })
export const {setUsers,deleteUser,logout}=userSlice.actions
export default userSlice.reducer;