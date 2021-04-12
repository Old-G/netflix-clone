import { useEffect, useState } from 'react'
import s from './style.module.css'
import cn from 'classnames'
import axios from '../../../../data/axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  const base_url = 'http://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

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
                onClick={() => handleClick(movie)}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerUrl && <YouTube video={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
