import axios from 'axios'

const KEY = '93f7555c4ae5c5b68bfc36852b46cfcd'

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        q:'',
        api_key: KEY
    }
})