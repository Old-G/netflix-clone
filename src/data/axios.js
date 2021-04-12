import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3/movie/550',
})

export default instance
