import axios from 'axios';

export default axios.create({

  // local server
  // baseURL: 'http://localhost:4000/',

  // live server
  baseURL: 'https://danger-api.herokuapp.com/',
  // When requests need authorization
  // headers: {
  //   Authorization: ''
  // }
})
