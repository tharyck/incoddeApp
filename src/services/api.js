import axios from 'axios';
import {AsyncStorage} from "react-native";
const token = AsyncStorage.getItem('token');

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

api.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token')
        const { headers } = config
        headers.Authorization = `Bearer ${token}`
        return { ...config, headers }
    },
    error => error
)

api.interceptors.response.use(
    config => config,
    error => {
        let newError = { ...error }
        if (error.code === 'ECONNABORTED') {
            const data = { errors: [{ message: i18n.t('errors.request.timeOut') }] }
            newError = {
                ...error,
                response: { ...error.response, data },
            }
        }
        return Promise.reject(newError)
    }
)

export default api;
