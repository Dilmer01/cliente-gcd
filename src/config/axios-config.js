import Axios from 'axios'

export const api = Axios.create({
    baseURL: 'http://18.213.168.163/api'
});