import axios from 'axios';

export const itaajApi = axios.create({
    baseURL: import.meta.env.NODE_ENV == undefined? 'http://localhost:3001' : 'https://itaaj-api.xyz/api/v1',
    headers: {
        "api-key": "a0341d0de71a21b122a134576803f9fea2e9841a307b4e26f9240ac2f7d363ff3018a17f2d7f3ecb5a9fe62327e4eaf306864ec741e6432aa50faaf9d92aa6bd"
    }
})