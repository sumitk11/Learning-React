import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-ffd27.firebaseio.com/'
});

export default instance;