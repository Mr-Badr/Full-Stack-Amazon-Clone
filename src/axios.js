import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://us-central1-challenge-edb35.cloudfunctions.net/api'
  //'http://localhost:5001/challenge-edb35/us-central1/api' // The API (Cloud function) URL
});

export default instance;