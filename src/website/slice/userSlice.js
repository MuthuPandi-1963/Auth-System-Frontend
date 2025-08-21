import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      // Replace with real API call
      await new Promise((res) => setTimeout(res, 1000)); // simulate delay

      if (email === 'admin@example.com' && password === 'admin123') {
        return {
          username: 'admin',
          email,
          token: '',
        };
      } else {
        return thunkAPI.rejectWithValue('Invalid email or password');
      }
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
            (user,index)=>index !== action.payload);
            },
        },
        logout:(state)=>{
            state.username="";
            state.password='';
            state.email='';
            state.isauthenticated=false,
            state.loading=false,
            state.error=null
        }
    })
export const {setUsers,deleteUser,logout}=userSlice.actions
export default userSlice.reducer;