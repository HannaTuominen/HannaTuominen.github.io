import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hanna-tuominen-portfolio-fe84a-default-rtdb.firebaseio.com/'
});

export default instance;
