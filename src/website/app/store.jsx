import { configureStore } from "@reduxjs/toolkit"; 
import  userReducer from "../slice/userSlice";
const store =configureStore({
    reducer:{
        userInfo:userReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["meta.config", "meta.request", "meta.response"],
        ignoredActionPaths: ["meta.config", "meta.request", "meta.response"],}})
});

export default store;