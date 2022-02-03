import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:9000/api/message/'
    baseURL: 'https://twitter-project-react-1234.herokuapp.com/api/message/'
});

export default instance;