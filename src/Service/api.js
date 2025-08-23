import { getToken,clearToken } from '../utilities/token';
import store from '../website/app/store'
import { logout } from '../website/slice/userSlice';
import axios from './axios';
const api =axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
    headers:{"Content-Type":'application/json'}
    
})
api.interceptors.request.use((config)=>{
    const token = getToken();
    if(token) config.headers.Authorization=`Bearer ${token}`
    return config
})
api.interceptors.response.use((res)=>res,
(err)=>{
    if(err.response?.status=== 401)
        {
        clearToken();
        store.dispatch(logout())
    }
    return Promise.reject(err);
}

)
// ---- Auth endpoints wrappers ----

export const authAPI = {
register: (data) => api.post(`/auth/signup`, data),
login: (data) => api.post("/auth/login", data),
logout: () => api.post("/auth/logout"),
user: (params) => api.get("/auth/verify_user", { params }),
updateUser: (data) => api.put("/auth/verify_user", data),
deleteUser: () => api.delete("/auth/verify_user"),
verifyPassword: (data) => api.post("/auth/verify-password", data),
requestReset: (data) => api.post("/auth/request-password-reset", data),
resetPassword: (data) => api.post("/auth/reset-password", data),
};

export default api;