import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-v22.firebaseio.com/'
});

export default instance;