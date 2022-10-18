import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://walmart.p.rapidapi.com/v2/auto-complete',
  params: { term: 'macbook air' },
  headers: {
    'X-RapidAPI-Key': '88b10585c4msh04e67d78d927e0bp16e13fjsn23304056068a',
    'X-RapidAPI-Host': 'walmart.p.rapidapi.com',
  },
};
export const req = () => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
