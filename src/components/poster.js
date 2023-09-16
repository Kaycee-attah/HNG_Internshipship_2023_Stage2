import React from 'react'
import Poster from '../assests/images/poster.jpg'
import DescriptionBox from './descriptionBox';


export default function poster({movie}) {
  let img_path = "https://image.tmdb.org/t/p/w500"
  

  function shuffle(array) {
    let currentIndex  = array.length, randomIndex;

    while(currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ]
    }

    return array;

  }

  const shuffled_Array = shuffle(movie)
  const movie_poster = shuffled_Array.slice(0, 1)
  console.log(movie_poster)
  return (
    <div className='Poster-container'>
        {movie_poster.map((res,pos) => (
          <img  src={img_path+res.poster_path} className='movieposter'>

          </img>
        )
        
      )}
      <DescriptionBox movie_poster={movie_poster}/>
    </div>
  )
}
