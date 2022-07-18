import Axios from 'axios'

export const api = Axios.create({
    baseURL: 'http://50.16.75.165/api'
});