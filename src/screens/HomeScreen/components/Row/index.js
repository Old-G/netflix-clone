import { useEffect, useState } from 'react'
import s from './style.module.css'
import cn from 'classnames'
import axios from '../../../../data/axios'

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([])

  const base_url = 'http://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className={s.row}>
      <h2>{title}</h2>

      <div className={s.row__posters}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={cn(
                  s.row__poster,
                  isLargeRow && [s.row__posterLarge]
                )}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  )
}

export default Row
