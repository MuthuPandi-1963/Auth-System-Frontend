import { getToken,clearToken } from '../utilities/token';
import store from '../website/app/store'
import { logout } from '../website/slice/userSlice';
import api from './axios';
api.interceptors.requesst.use((config)=>{
    const token = getToken();
    if(token) config.headers.Authorization=`bearer ${token}`
    return config
})
api.interceptors.response.use((res)=>res,
(err)=>{
    if(err.response?.status=== 404)
        {
        clearToken();
        store.dispatch(logout())
    }
    return Promise.reject(err);
}

)
