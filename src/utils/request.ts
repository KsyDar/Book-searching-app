import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
})

instance.interceptors.request.use((req) => {
    const key = "AIzaSyAiRrtJFChoTA2TdyvwfvAp5zIYoHE9hqQ";
    req.params = {
        ...req.params,
        key: key,
    }
    return req
})

export default instance