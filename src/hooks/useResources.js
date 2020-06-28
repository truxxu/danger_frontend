import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  // When requests need authorization
  // headers: {
  //   Authorization: ''
  // }
})
