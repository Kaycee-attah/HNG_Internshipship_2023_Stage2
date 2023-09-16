import React from 'react'

export default function moviecard(movie) {
    let img_path = "https://image.tmdb.org/t/p/w500"
    // console.log(movie.info)
  return (
    <div className='moviecard-container' data-testid="movie-card">
        <div className='movieposter-wrapper' data-testid="movie-poster">
            <img  src={img_path+movie.info.poster_path} className='movieposter'>

            </img>
        </div>
        <div className='moviedetails-wrapper'>
            <span className='country-yr' >
                <p data-testid="movie-release-date">{movie.info.release_date}</p>
            </span>
            <h2 className='movie-title' data-testid="movie-title">{movie.info.title}</h2>
            <span className='movie-rating'>
                <div className='imdb-rating'>
                    <span className='img-im'></span>
                    <span className='rating-im'>{movie.info.vote_average}</span>   
                </div>
                <div className='rottentomatoes-rating'>
                    <span className='img-rt'></span> 
                    <span className='rating-rt'>97%</span>
                </div>
            </span>
            <span className='genre'>
                <p>Action, Adventure, Horror</p>
            </span>
        </div>
    </div>
  )
}
