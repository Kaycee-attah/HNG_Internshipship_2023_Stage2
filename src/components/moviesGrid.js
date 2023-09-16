import React, { useEffect, useState } from 'react'
import Moviecard from './moviecard'
import Footer from './footer'
import { Link } from 'react-router-dom'
let API_KEY = "&api_key=4c2de6d8ecde71a2efa8308d93eb3678"
let base_url = "https://api.themoviedb.org/3"
let url = base_url+"/movie/popular?language=en-US&page=1"+API_KEY
let url_genre = "https://api.themoviedb.org/3/genre/movie/list?language=en"

// "https://api.themoviedb.org/3/genre/movie/list?language=en"

export default function MoviesGrid({films}) {
  // const [url_, setUrl_] = useState(url)
  // const [url_Genre, setUrl_Genre] = useState(url_genre)
  //   const [movieData, setmovieData] = useState([])
  //   const [genreListData, setGenreListData] = useState([])




    // const getMovie = () => {
    //     fetch(url_).then(res => res.json()).then(json => setmovieData(json.results))
        
    // }

    // const getList = () => {
    //   fetch(url_Genre).then(res => res.json()).then(json => setGenreListData(json.results))
    // }

    // useEffect(() => {
    //     getMovie()
    //     getList()
    // },[url_, url_Genre])

    

    console.log(films)
    
    // console.log(genreListData)

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

    const shuffled_Array = shuffle(films)
    const top_10 = shuffled_Array.slice(0, 10)

  return (
    <div className='moviesGrid-container'>
      
      <div className='moviesGrid-wrapper'>
      {top_10.map((res,pos) => (
            <Link to={`movie/${res.id}`} key={res.id}>
              <Moviecard info={res} key={pos} />
            </Link>
          )
        )}
        {/* <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />

        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />

        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard /> */}
      </div>
      <Footer />
        

    </div>
  )
}

//loader function 
export const moviesLoader = async () => {
  const res = await fetch(url)

  if(!res.ok) {
    throw Error("Could not fetch data")
  }

  return res.json()
}

