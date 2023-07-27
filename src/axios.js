import axios from 'axios';


axios.baseURL = 'http://127.0.0.1:8000';
axios.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
