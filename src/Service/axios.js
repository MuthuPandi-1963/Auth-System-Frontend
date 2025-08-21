import axios from 'axios';

const api =axios.create({
    baseurl:import.meta.env.VITE_BACKEND_URL,
    headers:{"Content-Type":'application/json'},
    withCredentials:true
    
})
export default api