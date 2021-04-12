import { useEffect, useState } from 'react'
import s from './style.module.css'
import cn from 'classnames'
import axios from '../../../../data/axios'
import requests from '../../../../data/Request'

function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  }, [])

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string
  }

  return (
    <header
      className={s.banner}
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center top',
      }}
    >
      <div className={cn(s.banner__contents)}>
        <h1 className={cn(s.banner__title)}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={cn(s.buttons)}>
          <button className={cn(s.banner__button)}>Play</button>
          <button className={cn(s.banner__button)}>My List</button>
        </div>
        <h1 className={cn(s.banner__description)}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className={cn(s.banner__fadeBottom)} />
    </header>
  )
}

export default Banner
