import axios from 'axios';

export const getItems =  async () => await axios.get('http://localhost:3000/todo_items')
  .then(function (response) {
    console.log('api', response);

  return response.data;
})
