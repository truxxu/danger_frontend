import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4000/',
  // When requests need authorization
  // headers: {
  //   Authorization: ''
  // }
})
